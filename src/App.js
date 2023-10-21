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

    App.validate(input);

    const result = this.#computer.judgment(input);

    if (result === 'fail') {
      await this.#input();
    }

    if (result === 'pass') {
      MissionUtils.Console.print(GAME.CLEAR);

      const option = await MissionUtils.Console.readLineAsync(GAME.OPTION);

      if (option === '1') {
        await this.#start();
      }
    }
  }

  static validate(input) {
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
}

const app = new App();
app.play();

export default App;
