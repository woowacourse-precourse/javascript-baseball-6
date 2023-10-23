import { GAME } from './Constants';

class Baseball {
  static announceGameOutcome(random, input) {
    const numInput = Baseball.changeNumToArr(input);
    const strikeResult = Baseball.isStrikeCount(random, numInput);
    const ballResult = Baseball.isBallCount(random, numInput);

    return Baseball.getGameResult(strikeResult, ballResult);
  }

  static getGameResult(strikeResult, ballResult) {
    if (strikeResult === GAME.ZERO && ballResult === GAME.ZERO)
      return GAME.NOTHING;

    if (strikeResult !== GAME.ZERO && ballResult !== GAME.ZERO)
      return Baseball.isBallAndStrike(strikeResult, ballResult);

    return Baseball.getFinalResult(strikeResult, ballResult);
  }

  static getFinalResult(strikeResult, ballResult) {
    return strikeResult > ballResult
      ? `${Baseball.isStrike(strikeResult)}`
      : `${Baseball.isBall(ballResult)}`;
  }

  static changeNumToArr(input) {
    return input.split('').map((num) => Number(num));
  }

  static isStrikeOut(random, input) {
    return (
      Baseball.isStrikeCount(random, Baseball.changeNumToArr(input)) ===
      GAME.STRIKE_OUT
    );
  }

  static isStrikeCount(random, input) {
    return random.filter((num, idx) => num === input[idx]).length;
  }

  static isBallCount(random, input) {
    return random.filter(
      (num, idx) => input.includes(num) && input[idx] !== num
    ).length;
  }

  static isBallAndStrike(strikeResult, ballResult) {
    return `${ballResult}${GAME.BALL} ${strikeResult}${GAME.STRIKE}`;
  }

  static isStrike(count) {
    return `${count}${GAME.STRIKE}`;
  }

  static isBall(count) {
    return `${count}${GAME.BALL}`;
  }
}

export default Baseball;
