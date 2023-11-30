import CONSTANTS from '../constants/constants.js';
import Hint from '../domain/Hint.js';
import generateRandomNumbers from '../utils/generateRandomNumbers.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class BaseballGameController {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = generateRandomNumbers(CONSTANTS.number.numberSize);
  }

  async startGame() {
    OutputView.printStartString();

    return this.#inputUserNumbers();
  }

  async #inputUserNumbers() {
    const numbers = await InputView.readNumbers();
    const hint = new Hint(numbers, this.#computerNumbers);
    const strikeCount = hint.calculateStrikeCount();
    const ballCount = hint.calculateBallCount(strikeCount);
    const hintMessage = hint.generateHintMessage(strikeCount, ballCount);

    return this.#handleInputOrEnd(strikeCount, hintMessage);
  }

  #handleInputOrEnd(strikeCount, hintMessage) {
    OutputView.printHintString(hintMessage);
    if (strikeCount === CONSTANTS.number.numberSize) return OutputView.printEndString();
    return this.#inputUserNumbers();
  }
}

export default BaseballGameController;
