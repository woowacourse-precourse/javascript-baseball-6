import Game from './Game.js';
import { input, print } from './view/View.js';
import { MESSAGE, SETTING } from './Constants.js';
import { validateInput, validateRestartInput } from './utils/Validator.js';

const {
  GAME_START,
  INPUT_NUMBER,
  SUGGEST_NEW_GAME,
  STRIKE,
  SUCCESS,
  BALL,
  NOTHING,
} = MESSAGE;
const { MAX_STRIKE_COUNT } = SETTING;

export default class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  async play() {
    try {
      let isGameFinished = false;

      while (!isGameFinished) {
        print(GAME_START);

        const inputNumber = (await input(INPUT_NUMBER)).trim();
        validateInput(inputNumber);

        const { ballCount, strikeCount } = this.#game.checkGuess(inputNumber);
        const message = this.feedbackMessage(ballCount, strikeCount);
        print(message);

        if (strikeCount !== MAX_STRIKE_COUNT) continue;
        const restartNumber = Number(await input(SUGGEST_NEW_GAME));
        isGameFinished = !(
          validateRestartInput(restartNumber) && restartNumber === 1
        );

        if (!isGameFinished) {
          this.#game.init();
        }
      }
    } catch (e) {
      throw new Error(e.message);
    }
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
