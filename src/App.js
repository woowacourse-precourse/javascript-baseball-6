import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER_BASEBALL, RESTART_GAME, ERROR_MESSAGE } from './constant.js';

class App {
  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getHintMessage(strike, ball) {
    if (ball === 0 && strike === 0) {
      return NUMBER_BASEBALL.nothing;
    } else if (ball > 0 && strike > 0) {
      return `${ball}${NUMBER_BASEBALL.ball} ${strike}${NUMBER_BASEBALL.strike}`;
    } else if (ball > 0) {
      return ball + NUMBER_BASEBALL.ball;
    } else if (strike > 0) {
      return strike + NUMBER_BASEBALL.strike;
    }
  }

  getHintResults(problem, result) {
    let strike = 0;
    let ball = 0;

    problem.forEach((number, index, array) => {
      const userNumber = Number(result[index]);
      if (number === userNumber) strike += 1;
      else {
        if (array.includes(userNumber)) ball += 1;
      }
    });

    let hint = this.getHintMessage(strike, ball);

    return { isRightResult: strike === 3, hint };
  }

  validationResult(result) {
    const numberTest = /^[1-9]{3}$/g;
    const deDuplicationResult = [...new Set(result)];

    return !numberTest.test(result) || deDuplicationResult.length !== 3;
  }

  async getUserInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  }

  async play() {
    const problem = this.getRandomNumber();
    Console.print(NUMBER_BASEBALL.start);

    while (true) {
      const result = await this.getUserInput(NUMBER_BASEBALL.input);
      const isInValid = this.validationResult(result);
      const { isRightResult, hint } = this.getHintResults(problem, result);

      if (isInValid) throw new Error(ERROR_MESSAGE.invalidData);

      Console.print(hint);

      if (isRightResult) {
        Console.print(NUMBER_BASEBALL.end);
        const input = await this.getUserInput(NUMBER_BASEBALL.restart);

        if (RESTART_GAME.restart === input) this.play();

        break;
      }
    }
  }
}

export default App;
