import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, RESULT_MESSAGE, ERROR_MESSAGE } from '../constants/Message';

class Control {
  static async askRestart(appInstance) {
    const userAnswer = await Console.readLineAsync(GAME_MESSAGE.restartGame);

    if (userAnswer === '1') {
      appInstance.isPlaying = true;
    } else if (userAnswer === '2') {
      Console.print(GAME_MESSAGE.endGame);
      appInstance.isPlaying = false;
    } else {
      throw new Error(ERROR_MESSAGE.invalidChoice);
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
      Console.print(`${strike}${RESULT_MESSAGE.strike}`);
      Console.print(GAME_MESSAGE.correctGame);
      return;
    }

    if (strike === 0 && ball === 0) {
      Console.print(RESULT_MESSAGE.nothing);
    } else if (strike === 0) {
      Console.print(`${ball} ${RESULT_MESSAGE.ball}`);
    } else if (ball === 0) {
      Console.print(`${strike} ${RESULT_MESSAGE.strike}`);
    } else {
      Console.print(`${ball}${RESULT_MESSAGE.ball} ${strike}${RESULT_MESSAGE.strike}`);
    }
  }
}

export default Control;