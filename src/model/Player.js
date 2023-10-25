import { stringToIntArrayConvertor } from '../utils/stringToIntArrayConvertor.js';
import { playerNumbersValidator } from '../utils/playerInputValidator.js';

class Player {
  constructor() {
    this.numbers = [];
  }

  setNumbers(inputNumbers) {
    playerNumbersValidator(inputNumbers);
    this.numbers = stringToIntArrayConvertor(inputNumbers);
  }

  getNumbers() {
    return this.numbers;
  }
}

export default Player;
