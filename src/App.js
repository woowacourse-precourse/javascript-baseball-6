import { printMessage, pickNumberInRange, readLineAsync } from "./utils.js";
import {
  LOG,
  MAX_INPUT_LENGTH,
  MAX_STRIKE_COUNT,
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  END_NUMBER,
  RESTART_NUMBER,
  ERROR_MESSAGE,
} from "./constants.js";

class App {
  /**
   * @type {boolean}
   * @description 게임이 진행 여부
   */
  isPlaying;

  /**
   * @type {number[]}
   * @description 랜덤한 3개의 숫자
   */
  randomNumbers;

  constructor() {
    this.init();
  }

  /**
   * @description 게임을 초기화하는 메서드
   * - 게임 진행여부를 true로 설정합니다.
   * - 랜덤한 3개의 숫자를 생성합니다.
   */
  init() {
    this.isPlaying = true;
    this.randomNumbers = this.generateRandomNumbers();
  }

  /**
   * @description 게임을 시작하는 메서드
   * - 사용자의 입력을 받아 유효성을 확인하고 스트라이크와 볼의 개수를 출력합니다.
   * - 스트라이크가 3개일 경우, 게임을 재시작할지 확인합니다.
   * - 에러가 발생할 경우, 에러 메시지를 출력합니다.
   */
  async play() {
    printMessage(LOG.START);

    try {
      while (this.isPlaying) {
        const numbers = await this.getUserNumbers();

        const { strike, ball } = this.calculateStrikeBall(numbers);

        const message = this.makeMessage(strike, ball);

        printMessage(message);

        if (strike !== MAX_STRIKE_COUNT) {
          continue;
        }

        printMessage(LOG.CORRECT);

        await this.confirmRestart();
      }
    } catch (e) {
      this.isPlaying = false;
      throw new Error(`${ERROR_MESSAGE.HEADER} ${e.message}`);
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
   */
  async confirmRestart() {
    const input = await readLineAsync(LOG.RESTART);

    const restartNumber = Number(input);

    if (restartNumber !== RESTART_NUMBER && restartNumber !== END_NUMBER) {
      throw new Error(ERROR_MESSAGE.NOT_RESTART_OR_END);
    }

    const isRestart = restartNumber === RESTART_NUMBER;

    if (isRestart) {
      this.init();
    } else {
      this.isPlaying = false;
    }
  }

  /**
   * @description 랜덤한 3개의 숫자를 생성하는 메서드
   * - 1부터 9까지의 숫자 중 중복되지 않은 랜덤한 3개의 숫자를 생성합니다.
   * @returns {string}
   */
  generateRandomNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < MAX_INPUT_LENGTH) {
      const number = pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

      if (randomNumbers.includes(number)) {
        continue;
      }

      randomNumbers.push(number);
    }

    return randomNumbers;
  }

  /**
   *
   * @param {string} input - 사용자가 입력한 데이터
   * @description 사용자가 입력한 데이터가 유효한지 확인하는 메서드
   * - 입력한 데이터가 숫자가 아니거나, 0이 포함되거나, 3자리가 아니거나, 중복된 숫자가 있는지 확인합니다.
   * @returns {boolean}
   */
  validateInput(input) {
    const set = new Set(input.split(""));

    if (isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }

    if (input.length !== MAX_INPUT_LENGTH) {
      throw new Error(ERROR_MESSAGE.NOT_THREE_DIGITS);
    }

    if (set.size !== MAX_INPUT_LENGTH) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE);
    }

    if (set.has("0")) {
      throw new Error(ERROR_MESSAGE.NOT_RANGE);
    }

    return true;
  }

  /**
   * @param {number[]} input - 사용자가 입력한 데이터
   * @description 스트라이크와 볼의 개수를 계산하는 메서드
   * - 스트라이크는 자릿수와 값이 모두 같을 경우, 볼은 자릿수는 다르지만 값이 같을 경우입니다.
   * @returns {{strike: number, ball: number}}
   */
  calculateStrikeBall(input) {
    const randomNumbers = this.randomNumbers;

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < MAX_INPUT_LENGTH; i++) {
      const inputNumber = input[i];
      const randomNumber = randomNumbers[i];

      if (inputNumber === randomNumber) {
        strike++;
        continue;
      }

      if (randomNumbers.includes(inputNumber)) {
        ball++;
      }
    }

    return { strike, ball };
  }

  /**
   * @param {number} strike - 스트라이크의 개수
   * @param {number} ball - 볼의 개수
   * @description 스트라이크와 볼의 개수에 따라 메시지를 생성하는 메서드
   * - 볼이 0 이상일 경우 "n볼"을, 스트라이크가 0 이상일 경우 "n스트라이크"를, 둘 다 0일 경우 "낫싱"을 리턴합니다.
   * @returns {string}
   */
  makeMessage(strike, ball) {
    const messages = [];

    if (ball > 0) {
      messages.push(`${ball}${LOG.BALL}`);
    }

    if (strike > 0) {
      messages.push(`${strike}${LOG.STRIKE}`);
    }

    if (strike === 0 && ball === 0) {
      messages.push(LOG.NOTHING);
    }

    return messages.join(" ");
  }
}

export default App;
