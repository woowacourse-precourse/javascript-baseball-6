import { Random } from '@woowacourse/mission-utils';

class RandomNumberCreater {
  // 숫자를 랜덤으로 생성하는 함수
  static createRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }
}

export default RandomNumberCreater;
