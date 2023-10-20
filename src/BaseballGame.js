import { pickNumberInRange } from "./utils.js";
import {
  BALL,
  STRIKE,
  NOTHING,
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MAX_INPUT_LENGTH,
} from "./constants.js";

class BaseBallGame {
  /**
   * @type {number[]} 랜덤한 숫자 배열
   */
  randomNumbers = [];

  /**
   * @type {Map<number, number>} 사용자가 입력한 숫자와 strike, ball의 개수를 저장하는 cache store
   */
  scoreStore = new Map();

  /**
   * @type {number} 랜덤 숫자의 최소값
   */
  min = MIN_RANDOM_NUMBER;

  /**
   * @type {number} 랜덤 숫자의 최대값
   */
  max = MAX_RANDOM_NUMBER;

  /**
   * @type {number} 사용자 입력의 최대 길이
   */
  maxInputLength = MAX_INPUT_LENGTH;

  constructor({ min, max, maxInputLength }) {
    this.min = min;
    this.max = max;
    this.maxInputLength = maxInputLength;
  }

  /**
   * @description 게임을 초기화하는 메서드
   * - 랜덤 숫자의 최소값과 최대값, 사용자 입력의 최대 길이에 따라 랜덤한 숫자 배열을 생성합니다.
   * - cache store를 초기화합니다.
   */
  init() {
    this.randomNumbers = this.generateRandomNumbers();
    this.scoreStore.clear();
  }

  /**
   * @param {number} min - 최소값
   * @param {number} max - 최대값
   * @param {number} length - 생성할 숫자의 개수
   * @description 랜덤한 숫자를 생성하는 함수
   * - 최소값, 최대값, 생성할 숫재의 개수를 인자로 받아 중복되지 않은 랜덤한 숫자를 생성합니다.
   * @returns {number[]} 랜덤한 숫자 배열
   */
  generateRandomNumbers() {
    const set = new Set();

    while (set.size < this.maxInputLength) {
      const number = pickNumberInRange(this.min, this.max);

      set.add(number);
    }

    return [...set];
  }

  /**
   * @param {number} strike - 스트라이크의 개수
   * @param {number} ball - 볼의 개수
   * @description 스트라이크와 볼의 개수에 따라 메시지를 생성하는 메서드
   * - 볼이 0 이상일 경우 "n볼"을, 스트라이크가 0 이상일 경우 "n스트라이크"를, 둘 다 0일 경우 "낫싱"을 리턴합니다.
   * @returns {string}
   */
  generateScoreMessage(strike, ball) {
    const messages = [];

    if (ball > 0) {
      messages.push(`${ball}${BALL}`);
    }

    if (strike > 0) {
      messages.push(`${strike}${STRIKE}`);
    }

    if (strike === 0 && ball === 0) {
      messages.push(NOTHING);
    }

    return messages.join(" ");
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

    if (this.scoreStore.has(key)) {
      return this.scoreStore.get(key);
    }

    const randomNumbers = this.randomNumbers;
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

    this.scoreStore.set(key, score);

    return score;
  }
}

export default BaseBallGame;
