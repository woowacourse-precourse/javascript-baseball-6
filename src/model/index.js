import GameNumberGenerator from './GameNumberGenerator.js';
import GameNumberGeneratorError from '../utils/error/GameNumberGeneratorError.js';
import Validators from '../utils/validator/index.js';
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
      this.saveComputerNumbers(randomGameNumbers);
    } catch (error) {
      throw new GameNumberGeneratorError(ERROR_MESSAGE.game_number_generator);
    }
  }

  saveComputerNumbers(data) {
    this.#computerNumbers = data;
  }

  // prettier-ignore
  compareUserWithComputerNumbers(userNumbers) {
    return [...userNumbers].reduce((acc, userNumber, index) => {
        const isBall = this.#computerNumbers.includes(Number(userNumber));
        const isStrike = isBall && Number(userNumber) === this.#computerNumbers[index];
        if (isStrike) {
          acc.strike += 1;
        } else if (isBall) {
          acc.ball += 1;
        }
        return acc;
      }, { ball: 0, strike: 0 },
    );
  }
}

export default BaseballModel;
