import Game from './model/Game';
import View from './view/View';
import { ERROR, MESSAGE, SETTING } from './utils/Constants';
import { validator } from './utils/Validator';

const { RESTART, MAX_STRIKE_COUNT } = SETTING;
const { HEADER, NUMBER, LENGTH, DUPLICATE, RESTART_NUMBER } = ERROR;
const {
  GAME_START,
  INPUT_NUMBER,
  SUGGEST_NEW_GAME,
  SUCCESS,
  NOTHING,
  BALL,
  STRIKE,
} = MESSAGE;

export default class App {
  #game;

  #view;

  #inProgress = true;

  constructor() {
    this.#game = new Game();
    this.#view = new View();
  }

  async play() {
    try {
      while (this.#inProgress) {
        const inputNumber = await this.getUserNumber();

        const { ballCount, strikeCount } =
          this.#game.compareNumbers(inputNumber);
        const message = this.feedbackMessage(ballCount, strikeCount);
        this.#view.print(message);

        if (strikeCount !== MAX_STRIKE_COUNT) continue;

        const restartNumber = await this.getUserRestartChoice();
        this.restart(restartNumber);
      }
    } catch (e) {
      this.end();
      throw new Error(e.message);
    }
  }

  /**
   * @description 사용자에게 입력값 수신 및 유효성 검사 호출 함수
   * @returns {number}
   */
  async getUserNumber() {
    this.#view.print(GAME_START);
    const inputNumber = (await this.#view.input(INPUT_NUMBER)).trim();
    this.validateInput(inputNumber);

    return inputNumber;
  }

  /**
   * @description 사용자에게 재시작 입력값 수신 및 유효성 검사 호출 함수
   * @returns {Promise<number|null>}
   */

  async getUserRestartChoice() {
    const restartNumber = Number(await this.#view.input(SUGGEST_NEW_GAME));
    if (this.validateRestartInput(restartNumber)) {
      return restartNumber;
    }
    return null;
  }

  /**
   * @description 입력값에 따른 동작 구분 함수
   * @param {number} input
   */
  restart(input) {
    input === RESTART ? this.#game.init() : this.end();
  }

  end() {
    this.#inProgress = false;
  }

  /**
   * @description 스트라이크와 볼의 갯수를 판별하여 메세지를 반환하는 함수
   * @param {number} ball
   * @param {number} strike
   * @returns {string} message
   */
  feedbackMessage(ball, strike) {
    let message = '';

    if (strike === MAX_STRIKE_COUNT) {
      return `${STRIKE(strike)}\n${SUCCESS}`;
    }
    if (ball > 0) {
      message += `${BALL(ball)} `;
    }
    if (strike > 0) {
      message += `${STRIKE(strike)}`;
    }
    return message.trim() || `${NOTHING}`;
  }

  /**
   * @description 사용자 입력 검증 함수
   * 숫자 및 0이 들어갔는지에 대한 유무, 세 자리에 대한 유무, 중복값에 대한 유무
   * @param input
   * @returns {boolean}
   */
  validateInput(input) {
    this.#view.throwError(`${HEADER}${NUMBER}`, validator.isNumber(input));
    this.#view.throwError(
      `${HEADER}${LENGTH}`,
      validator.isCorrectLength(input),
    );
    this.#view.throwError(
      `${HEADER}${DUPLICATE}`,
      validator.isDuplicate(input),
    );

    return true;
  }

  /**
   * @description 사용자 재시작 입력 검증 함수
   * @param input
   * @returns {boolean}
   */
  validateRestartInput(input) {
    this.#view.throwError(
      `${HEADER}${RESTART_NUMBER}`,
      validator.isRestartNumber(input),
    );
    return true;
  }
}

const app = new App();
app.play();
