import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';
import { MESSAGES } from './messages.js';

class BaseBallGame {
  constructor() {
    Console.print(MESSAGES.START);
    this.computer = new Computer();
    this.user = new User();
  }

  async start() {
    this.computer.createRandomNumber();
    await this.playBaseBallGame();
  }

  async playBaseBallGame() {
    await this.user.getUserNumber();

    const [ballCnt, strikeCnt] = this.getBallAndStrikeCnt(
      this.computer.computerNum,
      this.user.userNum,
    );
  }

  getBallAndStrikeCnt(computerNum, userNum) {
    let ballCnt = 0;
    let strikeCnt = 0;

    userNum.forEach((number, idx) => {
      if (number === computerNum[idx]) {
        strikeCnt += 1;
      } else if (computerNum.includes(number)) {
        ballCnt += 1;
      }
    });

    return [ballCnt, strikeCnt];
  }
}

export default BaseBallGame;
