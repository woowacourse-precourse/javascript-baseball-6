import { Random } from "@woowacourse/mission-utils";

class BaseballGame {
  #answer;
  constructor() {
    this.#answer = [];
  }

  start() {
    this.#answer = BaseballGame.randomNumber();
  }

  //   랜덤 세자리 숫자 반환
  static randomNumber() {
    let set = new Set();
    while (set.size < 3) {
      set.add(Random.pickNumberInRange(1, 9));
    }
    return [...set];
  }
  static validNumber(number) {
    if (
      isNaN(number) ||
      number < 100 ||
      number > 999 ||
      new Set(number).size !== 3 ||
      !Number.isInteger(parseFloat(number))
    ) {
      throw new Error(
        "[Error] 1~9까지로 구성된 서로 다른 3자리 수를 입력하세요"
      );
    }
  }
}

export default BaseballGame;
