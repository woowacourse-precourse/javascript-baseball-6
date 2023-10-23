import { Player } from './Player.js';

export class Computer extends Player {
  compareNumber(userNumber) {
    this.validation(userNumber);

    const strike = this.#checkStrike(this._number, userNumber);
    const ball = this.#checkBall(this._number, userNumber);

    return { strike, ball };
  }

  #checkStrike(answer, userNumber) {
    const strike = answer.filter(
      (number, index) => number === userNumber[index]
    );

    return strike.length;
  }

  #checkBall(answer, userNumber) {
    const ball = answer.filter((number) => userNumber.includes(number));

    return ball.length;
  }
}
