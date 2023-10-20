import GameNumberGenerator from '../../utils/GameNumberGenerator.js';
import GameNumberGeneratorError from '../../utils/error/GameNumberGeneratorError.js';
import Validators from '../../utils/validator/index.js';
import { ERROR_MESSAGE } from '../constants/Messages.js';

class BaseballModel {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = [];
  }

  generateGameNumbers() {
    try {
      const randomGameNumbers = GameNumberGenerator();
      Validators.checkGameNumbers(randomGameNumbers.join(''));
      this.#computerNumbers = randomGameNumbers;
    } catch (error) {
      throw new GameNumberGeneratorError(ERROR_MESSAGE.GAME_NUMBER_GENERATOR);
    }
  }
}

export default BaseballModel;
