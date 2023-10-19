import { Random } from '@woowacourse/mission-utils';

class BaseballGame {
  #answer

  constructor() {
    this.#answer = 0;
  }

  // 각 자리 수가 중복되지 않은 무작위의 세 자리의 수를 반환
  static getRandomNumber() {
    const set = new Set();
    while (set.size < 3) {
      set.add(Random.pickNumberInRange(1, 9));
    }
    return [...set];
  }
}

export default BaseballGame;