import { Random } from '@woowacourse/mission-utils';
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
}
export default Computer;
