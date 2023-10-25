import { Random } from '@woowacourse/mission-utils';

export default class BaseBall {
  #winningNumbers;

  constructor() {
    this.#winningNumbers = null;
  }

  createPassword() {
    const passwordArray = [];
    while (passwordArray.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!passwordArray.includes(randomNumber)) {
        passwordArray.push(randomNumber);
      }
    }

    return Number(passwordArray.join(''));
  }

  _setPassword(password) {
    this.#winningNumbers = password;
  }

  _checkBallsAmount(userInput) {
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

  _checkStrikesAmount(userInput) {
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

  _checkNothing(userInput) {
    const userInputArray = [...String(userInput)];
    const isNothing = [...String(this.#winningNumbers)].every(
      (number) => !userInputArray.includes(number)
    );

    return isNothing;
  }

  countResult(userInput) {
    if (typeof userInput !== 'number') {
      throw new Error(
        `invalid userInput type userInput : ${userInput}, type of input : ${typeof userInput}`
      );
    }

    const ball = this._checkBallsAmount(userInput);
    const strike = this._checkStrikesAmount(userInput);
    const isNothing = this._checkNothing(userInput);

    return { ball, strike, isNothing };
  }

  init() {
    const password = this.createPassword();
    this._setPassword(password);
  }
}
