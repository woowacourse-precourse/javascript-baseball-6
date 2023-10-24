import {GameMessages} from '../GameMessages.js';
import Umpire from './Umpire.js';

class Pitcher {
  #pitcherNumbers;

  constructor(pitcherNumbers) {
    this.#pitcherNumbers = pitcherNumbers;
    Object.freeze(this);
  }

  static parsePitchBalls(balls) {
    if (balls.length !== Umpire.BALL_COUNT) throw new Error(GameMessages.PITCHBALL_ERROR1);
    if (!/^[1-9]{3}$/.test(balls)) throw new Error(GameMessages.PITCHBALL_ERROR2);

    const pitcherNumbers = balls.split('').map(Number);

    if (new Set(pitcherNumbers).size !== Umpire.BALL_COUNT) {
      throw new Error(GameMessages.PITCHBALL_ERROR1);
    }

    return pitcherNumbers;
  }
}
export default Pitcher;

