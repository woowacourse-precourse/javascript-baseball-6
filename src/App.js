import { GAME, ERROR } from './constant.js';
import Computer from './Computer.js';
import print from '../src/Print.js';
import inputValue from '../src/Input.js';

class App {
  #computer;

  async play() {
    print(GAME.START);
    await this.#start();
  }

  async #start() {
    this.#computer = new Computer();
    await this.#input();
  }

  async #input() {
    const input = await inputValue(GAME.INPUT_NUMBER);
    App.#validateInput(input);
    await this.#judgment(input);
  }

  async #judgment(input) {
    this.#computer.judgment(input);

    const { strike, ball } = this.#computer.getResult();
    print(GAME.RESULT(strike, ball));

    if (strike !== GAME.STRIKE) {
      await this.#input();
    }

    if (strike === GAME.STRIKE) {
      print(GAME.CLEAR);
      await this.#getOption();
    }
  }

  async #getOption() {
    const option = await inputValue(GAME.OPTION);
    App.#validateOption(option);

    if (option === GAME.RESTART) {
      await this.#start();
    }

    if (option === GAME.QUIT) {
      print(GAME.END);
    }
  }

  static #validateInput(input) {
    if (input.length !== 3) {
      throw new Error(ERROR.LENGTH);
    }

    const result = /^[1-9]+$/.test(input);
    if (result === false) {
      throw new Error(ERROR.RANGE);
    }

    const unique = [...input].reduce(
      (unique, number) =>
        unique.includes(number) ? unique : [...unique, number],
      []
    );

    if (unique.length !== 3) {
      throw new Error(ERROR.UNIQUE);
    }
  }

  static #validateOption(option) {
    if (option !== '1' && option !== '2') {
      throw new Error(ERROR.OPTION);
    }
  }
}

export default App;
