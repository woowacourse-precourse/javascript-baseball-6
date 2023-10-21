import BaseballMaker from './BaseballMaker';

class Computer {
  #baseball;

  constructor() {
    this.#initBaseball();
  }

  #initBaseball() {
    this.#baseball = BaseballMaker.create().createBaseball();
  }

  #isStrike(playerBaseball, digit) {
    return playerBaseball[digit] === this.#baseball[digit];
  }

  #isBall(playerBaseball, digit) {
    return !this.#isStrike(playerBaseball, digit) && this.#baseball.includes(playerBaseball[digit]);
  }

  #calculateCompareResult({ prevCompareResult: { strike, ball }, playerBaseball, digit }) {
    return {
      strike: strike + (this.#isStrike(playerBaseball, digit) ? 1 : 0),
      ball: ball + (this.#isBall(playerBaseball, digit) ? 1 : 0),
    };
  }

  comparePlayerBaseball(playerBaseball) {
    return this.#baseball.reduce(
      ({ strike, ball }, _, digit) =>
        this.#calculateCompareResult({
          prevCompareResult: { strike, ball },
          playerBaseball,
          digit,
        }),
      { strike: 0, ball: 0 },
    );
  }
}

export default Computer;
