import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME, ERROR } from './constant.js';
import Computer from './Computer.js';

class App {
  async play() {
    MissionUtils.Console.print(GAME.START);
    const computer = new Computer();
    const input = await MissionUtils.Console.readLineAsync(GAME.INPUT_NUMBER);
    App.validate(input);
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

export default App;
