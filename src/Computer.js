import pickNumbers from './utils/pickNumbers.js';
import { BALL_COUNT } from '../constants/index.js';

class Computer {
  #computerNumbers;

  constructor() {
    this.#computerNumbers = pickNumbers();
  }

  checkBallCount(numberSet) {
    let ballCounts = [0, 0, 0];
    numberSet.map((value, index) => {
      if (this.#computerNumbers.indexOf(value) === index) {
        ballCounts[0] += 1;
      } else if (this.#computerNumbers.includes(value)) {
        ballCounts[1] += 1;
      } else {
        ballCounts[2] += 1;
      }
    });
    return this.generateBallCountMessage(ballCounts);
  }

  generateBallCountMessage([strike, ball, out]) {
    let ballCountMessage = '';

    if (ball > 0) ballCountMessage += `${ball}${BALL_COUNT.BALL} `;
    if (strike > 0) ballCountMessage += `${strike}${BALL_COUNT.STRIKE}`;
    if (out === 3) ballCountMessage += `${BALL_COUNT.OUT}`;

    return [ballCountMessage, strike];
  }
}

export default Computer;
