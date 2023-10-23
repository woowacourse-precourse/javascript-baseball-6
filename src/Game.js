import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER_LENGTH } from './Constants.js';

class Game {
  constructor() {
    this.answer = [];
    this.cntStrike = 0;
    this.cntBall = 0;
  }

  initAnswer() {
    this.answer = [];
  }

  setAnswer() {
    while (this.answer.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  initCntBall() {
    this.cntBall = 0;
  }

  initCntStrike() {
    this.cntStrike = 0;
  }

  countBall(userInput) {
    for (let i = 0; i < NUMBER_LENGTH; i += 1) {
      const targetNumber = userInput[i];
      if (
        this.answer.includes(targetNumber) &&
        this.answer[i] !== targetNumber
      ) {
        this.cntBall += 1;
      }
    }
  }

  countStrike(userInput) {
    for (let i = 0; i < NUMBER_LENGTH; i += 1) {
      if (this.answer[i] === userInput[i]) {
        this.cntStrike += 1;
      }
    }
  }
}

export default Game;
