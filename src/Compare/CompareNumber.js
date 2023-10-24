class Compare {
  #answer;

  constructor(randomNumber) {
    this.#answer = randomNumber;
  }

  getStrikeCount(input) {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === this.#answer[i]) count += 1;
    }

    return count;
  }

  getBallCount(input, strikeCount) {
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      if (this.#answer.includes(input[i])) count += 1;
    }

    return count - strikeCount;
  }
}

export default Compare;
