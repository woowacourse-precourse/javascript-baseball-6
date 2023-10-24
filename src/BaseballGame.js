import { Random } from "@woowacourse/mission-utils";

class BaseballGame {
  #answer;
  constructor() {
    this.#answer = [];
  }

  start() {
    this.#answer = BaseballGame.RandomNumber();
  }

  //   랜덤 세자리 숫자 반환
  static RandomNumber() {
    let set = new Set();
    while (set.size < 3) {
      set.add(Random.pickNumberInRange(1, 9));
    }
    return [...set];
  }
}

export default BaseballGame;
