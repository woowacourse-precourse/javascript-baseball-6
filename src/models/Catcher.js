import {Random} from '@woowacourse/mission-utils';
import Umpire from './Umpire.js';
class Catcher {
  static getCatcherNumbers() {
    const catcherNumbers = [];
    while (catcherNumbers.length < Umpire.BALL_COUNT) {
      const catcherNumber = Random.pickNumberInRange(Umpire.MIN_COUNT, Umpire.MAX_COUNT);
      if (!catcherNumbers.includes(catcherNumber)) {
        catcherNumbers.push(catcherNumber);
      }
    }
    return catcherNumbers;
  }
}

export default Catcher;

