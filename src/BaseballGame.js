import { View } from './View/View.js';
import { BASEBALL_NUMBER } from './constants/gameConfig.js';
import { MESSAGE } from './constants/message.js';

export class BaseballGame {
  #digit = BASEBALL_NUMBER.DIGIT;
  #view = View;

  constructor() {
    this.#view.print(MESSAGE.GAME_START);
  }
}
