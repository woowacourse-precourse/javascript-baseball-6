import { Random, Console } from '@woowacourse/mission-utils';
import { RESULT_MESSAGE } from './Message';
class Computer {
  createRandomNumber() {
    const number = [];
    while (number.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!number.includes(num)) {
        number.push(num);
      }
    }
    return number;
  }
  countStrikeBall(computerNumber, userNumber) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === Number(userNumber[i])) {
        strike++;
      } else {
        if (computerNumber.includes(Number(userNumber[i]))) {
          ball++;
        }
      }
    }
    return [strike, ball];
  }
  resultPrint(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print(RESULT_MESSAGE.NOTHING);
    } else if (strike !== 0 && ball === 0) {
      Console.print(strike + RESULT_MESSAGE.STRIKE);
    } else if (strike === 0 && ball !== 0) {
      Console.print(ball + RESULT_MESSAGE.BALL);
    } else if (strike !== 0 && ball !== 0) {
      Console.print(
        ball + RESULT_MESSAGE.BALL + ' ' + strike + RESULT_MESSAGE.STRIKE
      );
    }
  }
}
export default Computer;
