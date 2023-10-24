import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';
import { MESSAGES } from './messages.js';
import { validateRestartNumber } from './validation.js';

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

    await this.getResult(ballCnt, strikeCnt);
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

  async getResult(ballCnt, strikeCnt) {
    let resultMessage = '';

    if (ballCnt > 0) {
      resultMessage += `${ballCnt}${MESSAGES.BALL} `;
    }

    if (strikeCnt > 0) {
      resultMessage += `${strikeCnt}${MESSAGES.STRIKE}`;
    }

    if (this.#isNothing(ballCnt, strikeCnt)) {
      resultMessage += MESSAGES.NOTHING;
    }

    Console.print(resultMessage);

    if (strikeCnt === 3) {
      await this.getRestartNumber();
    } else {
      await this.playBaseBallGame();
    }
  }

  #isNothing(ballCnt, strikeCnt) {
    return ballCnt === 0 && strikeCnt === 0;
  }

  async getRestartNumber() {
    Console.print(MESSAGES.CORRECT_NUMBER);
    await Console.readLineAsync(MESSAGES.RESTART_OR_DONE).then((restartNum) => {
      validateRestartNumber(restartNum);

      if (restartNum === '1') {
        this.start();
      } else if (restartNum === '2') {
        Console.print(MESSAGES.END);
      }
    });
  }
}

export default BaseBallGame;
