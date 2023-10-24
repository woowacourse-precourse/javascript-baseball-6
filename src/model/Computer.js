import { Random } from '@woowacourse/mission-utils';
import { GAME_SETTINGS } from '../constants/GameSettings';

export default class Computer {
  #selectNumber;

  constructor() {
    this.generate();
  }

  generate = () => {
    const generatedNumber = new Set();

    while (generatedNumber.size < GAME_SETTINGS.numberLength) {
      const number = Random.pickNumberInRange(
        GAME_SETTINGS.startNumber,
        GAME_SETTINGS.endNumber
      );
      if (!generatedNumber.has(number)) {
        generatedNumber.add(number);
      }
    }
    this.#selectNumber = generatedNumber;
  };

  getSelectNumber = () => this.#selectNumber;
}
