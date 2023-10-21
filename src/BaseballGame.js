import { Random } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constants.js';

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

  // 숫자 야구에 사용될 수 있는 숫자인지 유효성 검사
  static validateNumber(number) {
    if (isNaN(number) || !Number.isInteger(parseFloat(number)) || number < 100 || number > 999 || new Set(number).size !== 3) {
      throw new Error(MESSAGE.INVALID_NUMBER);
    }
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

  // 게임을 진행하기 위해 컴퓨터의 수를 랜덤으로 정함
  start() {
    this.#answer = BaseballGame.getRandomNumber();
  }
}

export default BaseballGame;