const { Console, Random } = require('@woowacourse/mission-utils');
const Strings = require('./resources/Strings');


class Feedback {

  _feedback = null;
  _balls = null;
  _strikes = null;

  constructor(balls, strikes) {
    this._balls = balls;
    this._strikes = strikes;
    this.makeFeedback();
  }

  makeFeedback() {
    let string = ''
    if (this._balls) string += this._balls + Strings.BALL;
    if (this._strikes) string += this._strikes + Strings.STRIKE;
    if (!string) string += Strings.NOTHING
    this._feedback = string;
  }

  print() {
    Console.print(this._feedback);
  }
}

module.exports = Feedback;
