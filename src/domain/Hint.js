class Hint {
  #numbers;

  #computerNumbers;

  constructor(numbers, computerNumbers) {
    this.#numbers = numbers;
    this.#computerNumbers = computerNumbers;
  }

  calculateStrikeCount() {
    return this.#numbers.reduce((count, digit, index) => {
      return digit === this.#computerNumbers[index] ? count + 1 : count;
    }, 0);
  }

  calculateBallCount(strikeCount) {
    return (
      this.#numbers.reduce((count, digit) => {
        return this.#computerNumbers.includes(digit) ? count + 1 : count;
      }, 0) - strikeCount
    );
  }
}

export default Hint;
