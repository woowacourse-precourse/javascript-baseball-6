import { Random } from '@woowacourse/mission-utils';

class NumberGenerator {
  // 숫자를 랜덤으로 생성하는 함수
  static createRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers;
  }
}

export default NumberGenerator;
