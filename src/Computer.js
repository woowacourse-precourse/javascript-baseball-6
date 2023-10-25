import { Random } from '@woowacourse/mission-utils';

class Computer {
  /**
   * 서로 다른 임의의 숫자 3개를 생성한다.
   * @return {[number, number, number]}
   */
  createRandomNumber = () => {
    const numbers = [];

    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers;
  };
}

export default Computer;
