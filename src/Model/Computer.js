import { Player } from './Player.js';

export class Computer extends Player {
  compareNumberList(userNumberList) {
    this.validateNumber(userNumberList);

    const strike = this.#checkStrike(this._numberList, userNumberList);
    const ball = this.#checkBall(this._numberList, userNumberList);

    return { strike, ball };
  }

  #checkStrike(answerList, userNumberList) {
    const strike = answerList.filter(
      (number, index) => number === userNumberList[index]
    );

    return strike.length;
  }

  #checkBall(answerList, userNumberList) {
    const ball = answerList.filter((number) => userNumberList.includes(number));

    return ball.length;
  }
}
