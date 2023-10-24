import { pickNumberInRange } from "../utils/index.js";

class BaseBallGame {
  /**
   * @type {number[]} 랜덤한 숫자 배열
   */
  #randomNumbers = [];

  /**
   * @type {Map<number, {strike: number, ball: number}>} 사용자가 입력한 숫자와 strike, ball의 개수를 저장하는 cache store
   */
  #scoreStore = new Map();

  /**
   * @description 게임을 초기화하는 메서드
   * - 랜덤 숫자의 최소값과 최대값, 사용자 입력의 최대 길이에 따라 랜덤한 숫자 배열을 생성합니다.
   * - cache store를 초기화합니다.
   */
  init(props) {
    this.#randomNumbers = this.generateRandomNumbers(props);
    this.#scoreStore.clear();
  }

  /**
   * @param {number} min - 최소값
   * @param {number} max - 최대값
   * @param {number} length - 생성할 숫자의 개수
   * @description 랜덤한 숫자를 생성하는 함수
   * - 최소값, 최대값, 생성할 숫재의 개수를 인자로 받아 중복되지 않은 랜덤한 숫자를 생성합니다.
   * @returns {number[]} 랜덤한 숫자 배열
   */
  generateRandomNumbers({ min, max, maxInputLength }) {
    const set = new Set();

    while (set.size < maxInputLength) {
      const number = pickNumberInRange(min, max);

      set.add(number);
    }

    return [...set];
  }

  /**
   * @param {number[]} input - 사용자가 입력한 데이터
   * @description 스트라이크와 볼의 개수를 계산하는 메서드
   * - 스트라이크는 자릿수와 값이 모두 같을 경우, 볼은 자릿수는 다르지만 값이 같을 경우입니다.
   * - 이미 계산한 값일 경우, 캐시된 값을 리턴합니다.
   * @returns {{strike: number, ball: number}}
   */
  calculateStrikeBall(input) {
    const key = input.join("");

    if (this.#scoreStore.has(key)) {
      return this.#scoreStore.get(key);
    }

    const randomNumbers = this.#randomNumbers;
    const score = { strike: 0, ball: 0 };

    for (let i = 0; i < randomNumbers.length; i++) {
      const inputNumber = input[i];
      const randomNumber = randomNumbers[i];

      if (inputNumber === randomNumber) {
        score.strike++;
        continue;
      }

      if (randomNumbers.includes(inputNumber)) {
        score.ball++;
      }
    }

    this.#scoreStore.set(key, score);

    return score;
  }
}

export default BaseBallGame;
