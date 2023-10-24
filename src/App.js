import { throwError, printMessage, readLineAsync } from "./utils/index.js";
import { LOG, GAME_SETTING, ERROR_MESSAGE, SCORE } from "./utils/constants.js";
import BaseBallGame from "./core/BaseballGame.js";

const { STRIKE, BALL, NOTHING } = SCORE;
const { CORRECT, INPUT_NUMBER, RESTART, START } = LOG;
const { HEADER, NOT_LENGTH, NOT_NUMBER, NOT_RANGE, NOT_RESTART_OR_END, NOT_UNIQUE } = ERROR_MESSAGE;
const { MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, MAX_INPUT_LENGTH, END_NUMBER, RESTART_NUMBER } =
  GAME_SETTING;

class App {
  /**
   * @type {boolean} 게임 진행 여부
   */
  isPlaying;

  /**
   * @type {BaseBallGame} BaseBallGame 인스턴스
   */
  baseballGame;

  /**
   * @type {{ min: number, max: number, maxInputLength: number }} 게임 설정
   */
  gameSetting = {
    min: MIN_RANDOM_NUMBER,
    max: MAX_RANDOM_NUMBER,
    maxInputLength: MAX_INPUT_LENGTH,
  };

  /**
   * @description 게임을 시작하는 메서드
   * - 사용자의 입력을 받아 유효성을 확인하고 스트라이크와 볼의 개수를 출력합니다.
   * - 스트라이크가 3개일 경우, 게임을 재시작할지 확인합니다.
   * - 에러가 발생할 경우, 에러 메시지를 출력합니다.
   */
  async play() {
    try {
      this.start();

      printMessage(START);

      const baseballGame = this.baseballGame;

      while (this.isPlaying) {
        const numbers = await this.getUserNumbers();

        const { strike, ball } = baseballGame.calculateStrikeBall(numbers);

        const message = this.generateScoreMessage(strike, ball);

        printMessage(message);

        if (strike !== this.gameSetting.maxInputLength) {
          continue;
        }

        printMessage(CORRECT);

        const isRestart = await this.confirmRestart();

        this.restart(isRestart);
      }
    } catch (e) {
      this.end();
      throwError(`${HEADER} ${e.message}`);
    }
  }

  /**
   * @description 게임을 시작하는 메서드
   */
  start() {
    this.baseballGame = new BaseBallGame();
    this.isPlaying = true;

    this.baseballGame.init(this.gameSetting);
  }

  /**
   * @param {boolean} isRestart - 게임을 재시작할지 여부
   * @description 게임을 재시작하는 메서드
   */
  restart(isRestart) {
    if (isRestart) {
      this.baseballGame.init(this.gameSetting);
    }

    this.isPlaying = isRestart;
  }

  /**
   * @description 게임을 종료하는 메서드
   */
  end() {
    this.isPlaying = false;
    this.baseballGame = null;
  }

  /**
   * @description 사용자의 입력을 받는 메서드
   * - 사용자의 입력을 받고 유효성을 검사합니다.
   * - 유효하지 않은 입력일 경우, 에러 메시지를 출력합니다.
   * @returns {Promise<number[]>} 사용자가 입력한 3자리 숫자
   */
  async getUserNumbers() {
    const input = (await readLineAsync(INPUT_NUMBER)).trim();

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
    const input = await readLineAsync(RESTART);

    const restartNumber = Number(input);

    throwError(
      NOT_RESTART_OR_END,
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
    const { maxInputLength, min, max } = this.gameSetting;

    throwError(NOT_NUMBER, isNaN(Number(input)));

    throwError(NOT_LENGTH, input.length !== maxInputLength);

    throwError(NOT_UNIQUE, set.size !== maxInputLength);

    throwError(
      NOT_RANGE,
      splittedInput.filter((number) => Number(number) < min || Number(number) > max).length > 0,
    );

    return true;
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
