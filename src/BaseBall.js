import { paramType } from './utils/paramType.js';

export default class BaseBall {
  #winningNumbers;

  constructor(winningNumbers, _ = paramType(winningNumbers, Number)) {
    this.#winningNumbers = winningNumbers;
  }

  countResult(userInput, _ = paramType(userInput, Number)) {
    const ball = this._checkBallsAmount(userInput);
    const strike = this._checkStrikesAmount(userInput);
    const isNothing = this._checkNothing(userInput);

    return { ball, strike, isNothing };
  }

  _checkBallsAmount(userInput, _ = paramType(userInput, Number)) {
    const userInputArray = [...String(userInput)];
    const ballsAmount = [...String(this.#winningNumbers)].reduce(
      (balls, winningNumber, idx) => {
        if (winningNumber === userInputArray[idx]) return balls;
        if (userInputArray.includes(winningNumber)) {
          return (balls += 1);
        }
        return balls;
      },
      0
    );

    return ballsAmount;
  }

  _checkStrikesAmount(userInput, _ = paramType(userInput, Number)) {
    const userInputArray = [...String(userInput)];
    const strikesAmount = [...String(this.#winningNumbers)].reduce(
      (strikes, winningNumber, idx) => {
        return winningNumber === userInputArray[idx] ? (strikes += 1) : strikes;
      },
      0
    );

    return strikesAmount;
  }

  _checkNothing(userInput, _ = paramType(userInput, Number)) {
    const userInputArray = [...String(userInput)];
    const isNothing = [...String(this.#winningNumbers)].every(
      (winningNumber) => !userInputArray.includes(winningNumber)
    );

    return isNothing;
  }
}
