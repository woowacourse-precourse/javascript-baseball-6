import {GameMessages} from '../GameMessages.js';

class Pitcher {
  static PITCH_COUNT = 3;

  #pitcherNumbers;

  constructor(pitcherNumbers) {
    this.#pitcherNumbers = pitcherNumbers;
    Object.freeze(this);
  }

  static parsePitchBalls(balls) {
    if (balls.length !== Pitcher.PITCH_COUNT) throw new Error(GameMessages.PITCHBALL_CHECKER);
    if (!/^[1-9]{3}$/.test(balls)) throw new Error(GameMessages.PITCHBALL_CHECKER2);

    const ballsToNumbers = balls.split('').map(Number);

    if (new Set(ballsToNumbers).size !== 3) {
      throw new Error(GameMessages.PITCHBALL_CHECKER);
    }

    return new Pitcher(ballsToNumbers);
  }
}
export default Pitcher;

