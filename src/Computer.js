import { Random, Console } from '@woowacourse/mission-utils';
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
      Console.print('낫싱');
    } else if (strike !== 0 && ball === 0) {
      Console.print(strike + '스트라이크');
    } else if (strike === 0 && ball !== 0) {
      Console.print(ball + '볼');
    } else if (strike !== 0 && ball !== 0) {
      Console.print(ball + '볼 ' + strike + '스트라이크');
    }
  }
}
export default Computer;
