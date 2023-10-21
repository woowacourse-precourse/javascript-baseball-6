class Baseball {
  static announceGameOutcome(random, input) {
    const numInput = this.changeNumToArr(input);
    const strikeResult = this.isStrikeCount(random, numInput);
    const ballResult = this.isBallCount(random, numInput);

    if (strikeResult === 0 && ballResult === 0) return '낫싱';

    if (strikeResult !== 0 && ballResult !== 0)
      `${this.isBall(strikeResult)} ${this.isStrike(ballResult)}`;

    return strikeResult > ballResult
      ? `${this.isBall(strikeResult)}`
      : `${this.isStrike(ballResult)}`;
  }

  static isStrikeOut() {
    if (this.isStrikeCount === 3) return true;
  }

  static changeNumToArr(input) {
    return String(input)
      .split('')
      .map((num) => Number(num));
  }

  static isStrikeCount(random, input) {
    return random.filter((num, idx) => num === input[idx]).length;
  }

  static isBallCount(random, input) {
    return random.filter(
      (num, idx) => input.includes(num) && input[idx] !== num
    ).length;
  }

  static isStrike(count) {
    if (count >= 1) return `${count}스트라이크`;
  }

  static isBall(count) {
    if (count >= 1) return `${count}볼`;
  }
}

export default Baseball;
