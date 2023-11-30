import CONSTANTS from '../constants/constants.js';
import MESSAGE from '../constants/message.js';

class Hint {
  #numbers;

  #computerNumbers;

  constructor(numbers, computerNumbers) {
    this.#numbers = numbers;
    this.#computerNumbers = computerNumbers;
  }

  calculateStrikeCount() {
    return this.#numbers.reduce(
      (count, digit, index) => (digit === this.#computerNumbers[index] ? count + 1 : count),
      0,
    );
  }

  calculateBallCount(strikeCount) {
    return (
      this.#numbers.reduce(
        (count, digit) => (this.#computerNumbers.includes(digit) ? count + 1 : count),
        0,
      ) - strikeCount
    );
  }

  generateHintMessage(strikeCount, ballCount) {
    const hintMessage = [];
    if (ballCount !== CONSTANTS.number.zero) hintMessage.push(`${ballCount}${MESSAGE.print.ball}`);
    if (strikeCount !== CONSTANTS.number.zero)
      hintMessage.push(`${strikeCount}${MESSAGE.print.strike}`);
    if (ballCount === CONSTANTS.number.zero && strikeCount === CONSTANTS.number.zero)
      hintMessage.push(MESSAGE.print.nothing);

    return hintMessage;
  }
}

export default Hint;
