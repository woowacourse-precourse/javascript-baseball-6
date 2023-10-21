import { Console, Random } from '@woowacourse/mission-utils';
import Strings from './resources/Strings';


class Feedback {

  _feedback = null;
  _balls = null;
  _strikes = null;

  constructor(balls, strikes) {
    this._balls = balls;
    this._strikes = strikes;
    this._makeFeedback();
  }

  _makeFeedback() {
    let string = ''
    if (this._balls) string += this._balls + Strings.BALL + Strings.SPACE;
    if (this._strikes) string += this._strikes + Strings.STRIKE;
    if (!string) string += Strings.NOTHING
    this._feedback = string;
  }

  print() {
    Console.print(this._feedback);
  }

  getStrikes() {
    return this._strikes;
  }
}

export default Feedback;
