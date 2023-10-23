class Baseball {
  static announceGameOutcome(random, input) {
    const numInput = Baseball.changeNumToArr(input);
    const strikeResult = Baseball.isStrikeCount(random, numInput);
    const ballResult = Baseball.isBallCount(random, numInput);

    return Baseball.getGameResult(strikeResult, ballResult);
  }

  static getGameResult(strikeResult, ballResult) {
    if (strikeResult === 0 && ballResult === 0) return '낫싱';

    if (strikeResult !== 0 && ballResult !== 0)
      return `${Baseball.isBall(strikeResult)} ${Baseball.isStrike(
        ballResult
      )}`;

    return strikeResult > ballResult
      ? `${Baseball.isStrike(strikeResult)}`
      : `${Baseball.isBall(ballResult)}`;
  }

  static changeNumToArr(input) {
    return input.split('').map((num) => Number(num));
  }

  static isStrikeOut(random, input) {
    return Baseball.isStrikeCount(random, Baseball.changeNumToArr(input)) === 3;
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
    return `${count}스트라이크`;
  }

  static isBall(count) {
    return `${count}볼`;
  }
}

export default Baseball;
