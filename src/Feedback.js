const { Console, Random } = require('@woowacourse/mission-utils');

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
    // TODO: 문자열 포장
    let string = ''
    if (this._balls) string += `${this._balls}볼 `;
    if (this._strikes) string += `${this._strikes}스트라이크`;
    this._feedback = string;
  }

  print() {
    Console.print(this._feedback);
  }
}

module.exports = Feedback;