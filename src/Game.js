import { MissionUtils } from '@woowacourse/mission-utils';
import { LENGTH_OF_ANSWER } from './Constants.js';

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
    this.initAnswer();
    while (this.answer.length < LENGTH_OF_ANSWER) {
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
    this.initCntBall();
    for (let i = 0; i < LENGTH_OF_ANSWER; i += 1) {
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
    this.initCntStrike();
    for (let i = 0; i < LENGTH_OF_ANSWER; i += 1) {
      if (this.answer[i] === userInput[i]) {
        this.cntStrike += 1;
      }
    }
  }

  printPlayerGuessResult() {
    if (this.cntBall === 0 && this.cntStrike === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }

    if (this.cntBall === 0) {
      MissionUtils.Console.print(`${this.cntStrike}스트라이크`);
      return;
    }

    if (this.cntStrike === 0) {
      MissionUtils.Console.print(`${this.cntBall}볼`);
      return;
    }

    MissionUtils.Console.print(`${this.cntBall}볼 ${this.cntStrike}스트라이크`);
  }
}

export default Game;
