import Game from './Game.js';
import { input, print } from './view/View.js';
import { MESSAGE, SETTING } from './Constants.js';
import { validateInput, validateRestartInput } from './utils/Validator.js';

export default class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  async play() {
    try {
      let isGameFinished = false;

      while (!isGameFinished) {
        print(MESSAGE.GAME_START);

        const inputNumber = (await input(MESSAGE.INPUT_NUMBER)).trim();
        validateInput(inputNumber);

        const { ballCount, strikeCount } = this.#game.checkGuess(inputNumber);
        const message = this.feedbackMessage(ballCount, strikeCount);
        print(message);

        if (strikeCount === SETTING.MAX_STRIKE_COUNT) {
          const restartNumber = Number(await input(MESSAGE.SUGGEST_NEW_GAME));
          isGameFinished = !(
            validateRestartInput(restartNumber) && restartNumber === 1
          );
          if (!isGameFinished) {
            this.#game.init();
          }
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

    if (strike === SETTING.MAX_STRIKE_COUNT) {
      return `${strike}${MESSAGE.STRIKE}\n${MESSAGE.SUCCESS}`;
    }
    if (ball > 0) {
      message += `${ball}${MESSAGE.BALL} `;
    }
    if (strike > 0) {
      message += `${strike}${MESSAGE.STRIKE}`;
    }
    return message.trim() || `${MESSAGE.NOTHING}`;
  }
}

const app = new App();
app.play();
