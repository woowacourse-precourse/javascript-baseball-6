import { MissionUtils } from '@woowacourse/mission-utils';
import doValidate from './Validate.js';

class Game {
  async start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.result = {
      ball: 0,
      strike: 0,
    };
    this.getComputerNumber();
    await this.getPlayerNumber();
  }

  getComputerNumber() {
    this.computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  async getPlayerNumber() {
    MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
      .then((number) => {
        this.playerNumber = number;
        this.validatePlayerNumber();
        this.getResult();
      })
      .catch((err) => {
        MissionUtils.Console.print(err);
      });
  }

  validatePlayerNumber() {
    doValidate(this.playerNumber);
  }

  getResult() {
    for (let i = 0; i < 3; i += 1) {
      if (parseInt(this.playerNumber[i], 10) === this.computerNumber[i]) {
        this.result.strike += 1;
      } else if (this.computerNumber.includes(parseInt(this.playerNumber[i], 10))) {
        this.result.ball += 1;
      }
    }
  }
}

export default Game;
