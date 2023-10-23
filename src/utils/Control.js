import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, RESULT_MESSAGE, ERROR_MESSAGE } from '../constants/Message';

class Control {
  static async askRestart(appInstance) {
    const userAnswer = await Console.readLineAsync(GAME_MESSAGE.GAME_RESTART);

    if (userAnswer === '1') {
      appInstance.isPlaying = true;
    } else if (userAnswer === '2') {
      Console.print(GAME_MESSAGE.GAME_END);
      appInstance.isPlaying = false;
    } else {
      throw new Error(ERROR_MESSAGE.INVALID_CHOICE);
    }
  }

  static compareAndPrintResult(computerNumber, userNumber) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === userNumber[i]) {
        strike++;
      } else if (computerNumber.includes(userNumber[i])) {
        ball++;
      }
    }

    this.printResult({ ball, strike });
    return { ball, strike };
  }

  static printResult({ ball, strike }) {
    if (strike === 3) {
      Console.print(`${strike}${RESULT_MESSAGE.STRIKE}`);
      Console.print(GAME_MESSAGE.CORRECT_ANSWER);
      return;
    }

    if (strike === 0 && ball === 0) {
      Console.print(RESULT_MESSAGE.NOTHING);
    } else if (strike === 0) {
      Console.print(`${ball} ${RESULT_MESSAGE.BALL}`);
    } else if (ball === 0) {
      Console.print(`${strike} ${RESULT_MESSAGE.STRIKE}`);
    } else {
      Console.print(`${ball}${RESULT_MESSAGE.BALL} ${strike}${RESULT_MESSAGE.STRIKE}`);
    }
  }
}

export default Control;