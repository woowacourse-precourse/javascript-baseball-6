import Pitcher from './Pitcher.js';
import {Random} from '@woowacourse/mission-utils';
class Catcher {
  static MIN_COUNT = 1;
  static MAX_COUNT = 9;

  #catcherNumbers;

  //   constructor() {
  //     this.#catcherNumbers = this.getCatcherNumbers();
  //     Object.freeze(this);
  //   }

  static getCatcherNumbers() {
    const catcherNumbers = [];
    while (catcherNumbers.length < Pitcher.BALL_COUNT) {
      const catcherNumber = Random.pickNumberInRange(this.MIN_COUNT, this.MAX_COUNT);
      if (!catcherNumbers.includes(catcherNumber)) {
        catcherNumbers.push(catcherNumber);
      }
    }
    return catcherNumbers;
  }
}

export default Catcher;

