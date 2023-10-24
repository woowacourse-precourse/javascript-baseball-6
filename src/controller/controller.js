import { OUTPUT_MASSAGE } from '../contants.js';
import Computer from '../model/computer.js';
import scoreConversion from '../util/score-conversion.js';
import { guessAnswerValidate, retryAnswerValidate } from '../util/validation.js';
import View from '../view/view.js';

class Controller {
  #firstEnter = 0;

  constructor() {
    this.computer = new Computer();
  }

  async play() {
    if (this.#firstEnter <= 0) {
      View.print(OUTPUT_MASSAGE.START_GAME);
      this.#firstEnter += 1;
    }
    await this.#askAnswer();
  }

  async #askAnswer() {
    const answer = await View.input(OUTPUT_MASSAGE.ENTER_NUMBER);
    guessAnswerValidate(answer);
    await this.#checkAnswer(answer);
  }

  async #checkAnswer(answer) {
    const score = this.computer.compareNumber(answer);
    const result = scoreConversion(score);
    if (result === OUTPUT_MASSAGE.CORRECT_ANSWER) {
      View.print(result);
      await this.#askRetry();
    } else {
      View.print(result);
      await this.#askAnswer();
    }
  }

  async #askRetry() {
    const answer = await View.input(OUTPUT_MASSAGE.RESTART_GAME_MASSAGE);
    retryAnswerValidate(answer);
    if (answer === '1') {
      this.computer.setNumber();
      await this.play();
    }
    if (answer === '2') {
      View.print('게임 종료');
    }
  }
}

export default Controller;
