import { throwError, printMessage, readLineAsync, pickNumberInRange } from "./utils.js";
import {
  LOG,
  MAX_INPUT_LENGTH,
  END_NUMBER,
  RESTART_NUMBER,
  ERROR_MESSAGE,
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  BALL,
  STRIKE,
  NOTHING,
} from "./constants.js";

class App {
  /**
   * @type {boolean} 게임 진행 여부
   */
  isPlaying = false;

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

  /**
   * @description 게임을 초기화하는 메서드
   * - 게임 진행여부를 true로 설정합니다.
   * - 랜덤 숫자의 최소값과 최대값, 사용자 입력의 최대 길이에 따라 랜덤한 숫자 배열을 생성합니다.
   * - cache store를 초기화합니다.
   */
  init() {
    this.isPlaying = true;
    this.randomNumbers = this.generateRandomNumbers();
    this.scoreStore.clear();
  }

  /**
   * @description 게임을 시작하는 메서드
   * - 사용자의 입력을 받아 유효성을 확인하고 스트라이크와 볼의 개수를 출력합니다.
   * - 스트라이크가 3개일 경우, 게임을 재시작할지 확인합니다.
   * - 에러가 발생할 경우, 에러 메시지를 출력합니다.
   */
  async play() {
    this.init();

    printMessage(LOG.START);

    try {
      while (this.isPlaying) {
        const numbers = await this.getUserNumbers();

        const { strike, ball } = this.calculateStrikeBall(numbers);

        const message = this.generateScoreMessage(strike, ball);

        printMessage(message);

        if (strike !== this.maxInputLength) {
          continue;
        }

        printMessage(LOG.CORRECT);

        const isRestart = await this.confirmRestart();

        if (isRestart) {
          this.init();
        } else {
          this.isPlaying = false;
        }
      }
    } catch (e) {
      this.isPlaying = false;

      throwError(`${ERROR_MESSAGE.HEADER} ${e.message}`);
    }
  }

  /**
   * @description 사용자의 입력을 받는 메서드
   * - 사용자의 입력을 받고 유효성을 검사합니다.
   * - 유효하지 않은 입력일 경우, 에러 메시지를 출력합니다.
   * @returns {number[]} 사용자가 입력한 3자리 숫자
   */
  async getUserNumbers() {
    const input = (await readLineAsync(LOG.INPUT_NUMBER)).trim();

    this.validateInput(input);

    return input.split("").map(Number);
  }

  /**
   * @description 게임을 재시작할지 확인하는 메서드
   * - 입력받은 숫자가 1이나 2가 아닐 경우, 에러 메시지를 출력합니다.
   * - 입력받은 숫자가 1일 경우, 게임을 초기화합니다.
   * - 입력받은 숫자가 2일 경우, 게임을 종료합니다.
   * @returns {boolean} 게임을 재시작할지 여부
   */
  async confirmRestart() {
    const input = await readLineAsync(LOG.RESTART);

    const restartNumber = Number(input);

    throwError(
      ERROR_MESSAGE.NOT_RESTART_OR_END,
      restartNumber !== RESTART_NUMBER && restartNumber !== END_NUMBER,
    );

    return restartNumber === RESTART_NUMBER;
  }

  /**
   *
   * @param {string} input - 사용자가 입력한 데이터
   * @description 사용자가 입력한 데이터가 유효한지 확인하는 메서드
   * @description 오류가 발생하는 경우는 다음과 같습니다.
   * - 입력한 데이터가 숫자가 아닐 경우
   * - 입력한 데이터가 지정된 길이가 아닐 경우
   * - 입력한 데이터에 중복된 숫자가 있을 경우
   * - 입력한 데이터가 지정된 범위의 숫자가 아닐 경우
   * @returns {boolean}
   */
  validateInput(input) {
    const set = new Set(input.split(""));
    const min = this.min;
    const max = this.max;
    const maxInputLength = this.maxInputLength;

    throwError(ERROR_MESSAGE.NOT_NUMBER, isNaN(Number(input)));

    throwError(ERROR_MESSAGE.NOT_LENGTH, input.length !== maxInputLength);

    throwError(ERROR_MESSAGE.NOT_UNIQUE, set.size !== maxInputLength);

    for (let i = 0; i < input.length; i++) {
      const number = Number(input[i]);

      throwError(ERROR_MESSAGE.NOT_RANGE, number < min || number > max);
    }

    return true;
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

  /**
   * @param {number} min - 최소값
   * @param {number} max - 최대값
   * @param {number} length - 생성할 숫자의 개수
   * @description 랜덤한 숫자를 생성하는 함수
   * - 최소값, 최대값, 생성할 숫재의 개수를 인자로 받아 중복되지 않은 랜덤한 숫자를 생성합니다.
   * @returns {number[]} 랜덤한 숫자 배열
   */
  generateRandomNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < this.maxInputLength) {
      const number = pickNumberInRange(this.min, this.max);

      if (randomNumbers.includes(number)) {
        continue;
      }

      randomNumbers.push(number);
    }

    return randomNumbers;
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
}

export default App;
