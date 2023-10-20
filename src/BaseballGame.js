import { Random } from '@woowacourse/mission-utils';

class BaseballGame {
  #answer

  constructor() {
    this.#answer = [];
  }

  // 각 자리 수가 중복되지 않은 무작위의 세 자리의 수를 반환
  static getRandomNumber() {
    const set = new Set();
    while (set.size < 3) {
      set.add(Random.pickNumberInRange(1, 9));
    }
    return [...set];
  }

  // 입력값과 정답을 비교해 ball, strike 수를 반환
  getResult(guess) {
    const result = this.#answer.reduce(({ ball, strike }, value, index) =>
      ({
        ball: ball + (guess[index] != value && guess.includes(value) ? 1 : 0),
        strike: strike + (guess[index] == value ? 1 : 0)
      }),
      { ball: 0, strike: 0 }
    );
    return result;
  }
}

export default BaseballGame;