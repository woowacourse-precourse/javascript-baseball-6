import CONSTANTS from '../constants/constants.js';
import generateRandomNumbers from '../utils/generateRandomNumbers.js';
import Hint from '../domain/Hint.js';

class BaseballGameService {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = generateRandomNumbers(CONSTANTS.number.numberSize);
  }

  async baseballResult(numbers) {
    const hint = new Hint(numbers, this.#computerNumbers);
    const strikeCount = hint.calculateStrikeCount();
    const ballCount = hint.calculateBallCount(strikeCount);
    const hintMessage = hint.generateHintMessage(strikeCount, ballCount);

    return { strikeCount, hintMessage };
  }

  isGameEnd(strikeCount) {
    return strikeCount === CONSTANTS.number.numberSize;
  }

  shouldRestart(restart) {
    return restart === CONSTANTS.restart.start;
  }

  resetGame() {
    this.#computerNumbers = generateRandomNumbers(CONSTANTS.number.numberSize);
  }
}

export default BaseballGameService;
