import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME, ERROR } from './constant.js';
import Computer from './Computer.js';

class App {
  #computer;

  async play() {
    MissionUtils.Console.print(GAME.START);
    await this.#start();
  }

  async #start() {
    this.#computer = new Computer();
    await this.#input();
  }

  async #input() {
    const input = await MissionUtils.Console.readLineAsync(GAME.INPUT_NUMBER);
    App.#validateInput(input);
    this.#judgment(input);
  }

  #judgment(input) {
    const result = this.#computer.judgment(input);

    if (result === GAME.FAIL) {
      this.#input();
    }

    if (result === GAME.PASS) {
      MissionUtils.Console.print(GAME.CLEAR);
      this.#getOption();
    }
  }

  async #getOption() {
    const option = await MissionUtils.Console.readLineAsync(GAME.OPTION);
    App.#validateOption(option);

    if (option === '1') {
      this.#start();
    }

    if (option === '2') {
      MissionUtils.Console.print(GAME.END);
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
