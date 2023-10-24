import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_STATUS, SCORE, SETTING } from './constants';

const { SIZE } = SETTING;
const { BALL, STRIKE, NOTHING } = SCORE;

export class Game {
  constructor() {
    this.status = GAME_STATUS.READY;
    this.answer = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < SETTING.SIZE) {
      const number = MissionUtils.Random.pickNumberInRange(SETTING.MIN_NUMBER, SETTING.MAX_NUMBER);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  compareScore(num) {
    const answer = this.answer;
    let score = new Map();
    score.set(BALL, 0);
    score.set(STRIKE, 0);

    for (let i = 0; i < SIZE; i++) {
      if (num[i] === answer[i]) {
        score.set(STRIKE, score.get(STRIKE) + 1);
      } else if (answer.includes(num[i])) {
        score.set(BALL, score.get(BALL) + 1);
      }
    }

    return score;
  }

  getScoreMessage(score) {
    let message = []; 
    let ball = score.get(BALL);
    let strike = score.get(STRIKE);

    if (ball > 0) {
      message.push(`${ball}${BALL}`);
    }

    if (strike > 0) {
      message.push(`${strike}${STRIKE}`);
    }

    if (ball === 0 && strike === 0) {
      message.push(`${NOTHING}`);
    }
    
    return message.join(' ');
  }
}
