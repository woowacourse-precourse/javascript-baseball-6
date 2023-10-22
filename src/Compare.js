const { Console } = require('@woowacourse/mission-utils');
const { RESULT_MESSAGE, GAME_MESSAGE } = require('./constants/Message');

class Compare {
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

  static printResult(result) {
    const { ball, strike } = result;

    if (strike === 3) {
      Console.print(`${strike} ${RESULT_MESSAGE.STRIKE}`);
      Console.print(GAME_MESSAGE.CORRECT_ANSWER);
      return;
    }
    
    if (strike === 0 && ball === 0) {
      Console.print(RESULT_MESSAGE.NOTHING);
    } else if (strike === 0 && ball !== 0) {
      Console.print(`${ball} ${RESULT_MESSAGE.BALL}`);
    } else if (strike !== 0 && ball === 0) {
      Console.print(`${strike} ${RESULT_MESSAGE.STRIKE}`);
    } else {
      Console.print(`${ball} ${RESULT_MESSAGE.BALL} ${strike} ${RESULT_MESSAGE.STRIKE}`);
    }
  }
}

module.exports = Compare;
