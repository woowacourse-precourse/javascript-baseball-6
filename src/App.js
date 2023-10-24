import Game from './Game';
import View from './view/View';
import { MESSAGE, SETTING } from './Constants';
import { validateInput, validateRestartInput } from './utils/Validator';

const {
  GAME_START,
  INPUT_NUMBER,
  SUGGEST_NEW_GAME,
  SUCCESS,
  NOTHING,
  BALL,
  STRIKE,
} = MESSAGE;
const { RESTART, MAX_STRIKE_COUNT } = SETTING;

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

  async getUserNumber() {
    this.#view.print(GAME_START);
    const inputNumber = (await this.#view.input(INPUT_NUMBER)).trim();
    validateInput(inputNumber);

    return inputNumber;
  }

  async getUserRestartChoice() {
    const restartNumber = Number(await this.#view.input(SUGGEST_NEW_GAME));
    if (validateRestartInput(restartNumber)) {
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
}

const app = new App();
app.play();
