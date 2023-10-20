import { Random } from '@woowacourse/mission-utils';

export default class BaseBall {
  constructor() {
    this._password = null;
  }

  createPassword() {
    const passwordArray = [];
    while (passwordArray.length !== 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (passwordArray.includes(randomNumber)) continue;
      passwordArray.push(randomNumber);
    }

    return Number(passwordArray.join(''));
  }

  _setPassword(password) {
    this._password = password;
  }

  _checkBallsAmount(userInput) {
    const userInputArray = [...String(userInput)];
    const ballsAmount = [...String(this._password)].reduce(
      (ballAmount, currentPassword, idx) => {
        if (currentPassword === userInputArray[idx]) return ballAmount;
        if (userInputArray.includes(currentPassword)) {
          ballAmount += 1;
          return ballAmount;
        }
      },
      0
    );

    return ballsAmount;
  }

  _checkStrikesAmount(userInput) {
    const userInputArray = [...String(userInput)];
    const strikesAmount = [...String(this._password)].reduce(
      (strikeAmount, currentPassword, idx) => {
        return currentPassword === userInputArray[idx]
          ? (strikeAmount += 1)
          : strikeAmount;
      },
      0
    );

    return strikesAmount;
  }

  init() {
    const password = this.createPassword();
    this._setPassword(password);
  }
}
