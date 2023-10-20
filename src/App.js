import { throwError, printMessage, readLineAsync, pickNumberInRange } from "./utils.js";
import {
  LOG,
  MAX_INPUT_LENGTH,
  END_NUMBER,
  RESTART_NUMBER,
  ERROR_MESSAGE,
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
} from "./constants.js";
import BaseBallGame from "./BaseballGame.js";

class App {
  /**
   * @type {boolean} 게임 진행 여부
   */
  isPlaying = false;

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
   * @description 게임을 시작하는 메서드
   * - 사용자의 입력을 받아 유효성을 확인하고 스트라이크와 볼의 개수를 출력합니다.
   * - 스트라이크가 3개일 경우, 게임을 재시작할지 확인합니다.
   * - 에러가 발생할 경우, 에러 메시지를 출력합니다.
   */
  async play() {
    try {
      this.start();

      printMessage(LOG.START);

      const baseballGame = this.baseballGame;

      while (this.isPlaying) {
        const numbers = await this.getUserNumbers();

        const { strike, ball } = baseballGame.calculateStrikeBall(numbers);

        const message = baseballGame.generateScoreMessage(strike, ball);

        printMessage(message);

        if (strike !== this.maxInputLength) {
          continue;
        }

        printMessage(LOG.CORRECT);

        const isRestart = await this.confirmRestart();

        this.restart(isRestart);
      }
    } catch (e) {
      this.isPlaying = false;
      throwError(`${ERROR_MESSAGE.HEADER} ${e.message}`);
    }
  }

  /**
   * @description 게임을 시작하는 메서드
   */
  start() {
    const props = { min: this.min, max: this.max, maxInputLength: this.maxInputLength };

    this.baseballGame = new BaseBallGame(props);
    this.isPlaying = true;

    this.baseballGame.init();
  }

  /**
   * @param {boolean} isRestart - 게임을 재시작할지 여부
   * @description 게임을 재시작하는 메서드
   */
  restart(isRestart) {
    if (isRestart) {
      this.baseballGame.init();
    }

    this.isPlaying = isRestart;
  }

  /**
   * @description 사용자의 입력을 받는 메서드
   * - 사용자의 입력을 받고 유효성을 검사합니다.
   * - 유효하지 않은 입력일 경우, 에러 메시지를 출력합니다.
   * @returns {Promise<number[]>} 사용자가 입력한 3자리 숫자
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
   * @returns {Promise<boolean>} 게임을 재시작할지 여부
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
    const splittedInput = input.split("");
    const set = new Set(splittedInput);

    throwError(ERROR_MESSAGE.NOT_NUMBER, isNaN(Number(input)));

    throwError(ERROR_MESSAGE.NOT_LENGTH, input.length !== this.maxInputLength);

    throwError(ERROR_MESSAGE.NOT_UNIQUE, set.size !== this.maxInputLength);

    throwError(
      ERROR_MESSAGE.NOT_RANGE,
      splittedInput.filter((number) => Number(number) < this.min || Number(number) > this.max)
        .length > 0,
    );

    return true;
  }
}

export default App;
