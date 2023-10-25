import { VALIDATION } from '../constants/constants';

class GameResult {
  constructor() {
    this.ball = 0;
    this.strike = 0;
  }

  getStrike() {
    return this.strike;
  }

  getBall() {
    return this.ball;
  }

  addStrike() {
    this.strike += 1;
  }

  addBall() {
    this.ball += 1;
  }

  resetResult() {
    this.ball = 0;
    this.strike = 0;
  }

  isCompleteMatch() {
    return this.strike === VALIDATION.maxSize;
  }

  compareNumbers(computerNumbers, playerNumbers) {
    this.resetResult();

    for (let i = 0; i < VALIDATION.maxSize; i++) {
      if (computerNumbers[i] === playerNumbers[i]) {
        this.addStrike();
      } else if (computerNumbers.includes(playerNumbers[i])) {
        this.addBall();
      }
    }
  }
}

export default GameResult;
