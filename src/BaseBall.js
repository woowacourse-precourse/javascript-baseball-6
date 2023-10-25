import { paramType } from './utils/paramType';

export default class BaseBall {
  #winningNumbers;

  constructor(winningNumbers) {
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
      (ballAmount, currentPassword, idx) => {
        if (currentPassword === userInputArray[idx]) return ballAmount;
        if (userInputArray.includes(currentPassword)) {
          return (ballAmount += 1);
        }
        return ballAmount;
      },
      0
    );

    return ballsAmount;
  }

  _checkStrikesAmount(userInput, _ = paramType(userInput, Number)) {
    const userInputArray = [...String(userInput)];
    const strikesAmount = [...String(this.#winningNumbers)].reduce(
      (strikeAmount, currentPassword, idx) => {
        return currentPassword === userInputArray[idx]
          ? (strikeAmount += 1)
          : strikeAmount;
      },
      0
    );

    return strikesAmount;
  }

  _checkNothing(userInput, _ = paramType(userInput, Number)) {
    const userInputArray = [...String(userInput)];
    const isNothing = [...String(this.#winningNumbers)].every(
      (number) => !userInputArray.includes(number)
    );

    return isNothing;
  }
}
