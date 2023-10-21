import { ANSWER_LENGTH } from '../constants/constants.js';

const STRIKE = Object.freeze('스트라이크');
const BALL = Object.freeze('볼');
const NOTHING = Object.freeze('낫싱');

class HintCounter {
  constructor() {
    this.strikeCnt = 0;
    this.ballCnt = 0;
  }

  countHint(userAnswer, computerAnswer) {
    userAnswer.split('').forEach((num, i) => {
      if (num === computerAnswer.charAt(i)) {
        this.addStrikeCnt();
      }
      if (computerAnswer.includes(num) && computerAnswer.charAt(i) !== num) {
        this.addBallCnt();
      }
    });
  }

  addStrikeCnt() {
    this.strikeCnt += 1;
  }

  addBallCnt() {
    this.ballCnt += 1;
  }

  isAllStrike() {
    if (this.strikeCnt === ANSWER_LENGTH) return true;

    return false;
  }

  getHint() {
    if (this.strikeCnt === ANSWER_LENGTH) return `${ANSWER_LENGTH}${STRIKE}`;
    if (this.strikeCnt === 0 && this.ballCnt === 0) return NOTHING;
    if (this.strikeCnt === 0) return `${this.ballCnt}${BALL}`;
    if (this.ballCnt === 0) return `${this.strikeCnt}${STRIKE}`;

    return `${this.ballCnt}${BALL} ${this.strikeCnt}${STRIKE}`;
  }
}

export default HintCounter;
