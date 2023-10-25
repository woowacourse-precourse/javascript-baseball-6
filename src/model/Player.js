import { stringToIntArrayConvertor } from '../utils/stringToIntArrayConvertor.js';
import { playerNumbersValidator } from '../utils/playerInputValidator.js';

class Player {
  #numbers;

  constructor() {
    this.#numbers = [];
  }

  #setNumbers(inputNumbers) {
    this.#numbers = stringToIntArrayConvertor(inputNumbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  resetNumbers(inputNumbers) {
    playerNumbersValidator(inputNumbers);
    this.#setNumbers(inputNumbers);
  }
}

export default Player;
