import { Random } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant";

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
  //   숫자 야구에 쓰일 수 있는 숫자인지 유효성 검사
  static validNumber(number) {
    if (
      isNaN(number) ||
      number < 100 ||
      number > 999 ||
      new Set(number).size !== 3 ||
      !Number.isInteger(parseFloat(number))
    ) {
      throw new Error(MESSAGE.INVALID_INPUT);
    }
  }

  //   ball,strike 수 반환
  getAnswer(guess) {
    const answer = this.#answer.reduce(
      ({ ball, strike }, value, index) => ({
        ball: ball + (guess[index] != value && guess.includes(value) ? 1 : 0),
        strike: strike + (guess[index] == value ? 1 : 0),
      }),
      { ball: 0, strike: 0 }
    );
    return answer;
  }
}
export default BaseballGame;
