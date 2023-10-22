import { BASEBALL_NUMBER } from './constants/gameConfig.js';

export class BaseballGame {
  #digit = BASEBALL_NUMBER.DIGIT;

  constructor() {
    this.#initGame();
  }

  #initGame() {}
}
