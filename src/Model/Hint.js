import { ANSWER_LENGTH } from '../constants/constants.js';

const STRIKE = Object.freeze('스트라이크');
const BALL = Object.freeze('볼');
const NOTHING = Object.freeze('낫싱');

class Hint {
  #strikeCnt;
  #ballCnt;

  constructor() {
    this.strikeCnt = 0;
    this.ballCnt = 0;
  }

  addStrikeCnt() {
    this.strikeCnt += 1;
  }

  addBallCnt() {
    this.ballCnt += 1;
  }

  static isStrike(userNum, computer, i) {
    return userNum === computer.charAt(i);
  }

  static isBall(userNum, computer, i) {
    return computer.includes(userNum) && computer.charAt(i) !== userNum;
  }

  createHint(User, Computer) {
    const user = User.getAnswer().split('');
    const computer = Computer.getAnswer();

    user.forEach((num, i) => {
      if (Hint.isStrike(num, computer, i)) this.addStrikeCnt();
      if (Hint.isBall(num, computer, i)) this.addBallCnt();
    });
  }

  isAllStrike() {
    return this.strikeCnt === ANSWER_LENGTH;
  }

  getHint() {
    if (this.strikeCnt === ANSWER_LENGTH) return `${ANSWER_LENGTH}${STRIKE}`;
    if (this.strikeCnt === 0 && this.ballCnt === 0) return NOTHING;
    if (this.strikeCnt === 0) return `${this.ballCnt}${BALL}`;
    if (this.ballCnt === 0) return `${this.strikeCnt}${STRIKE}`;

    return `${this.ballCnt}${BALL} ${this.strikeCnt}${STRIKE}`;
  }
}

export default Hint;
