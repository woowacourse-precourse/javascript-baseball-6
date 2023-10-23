import { MissionUtils } from '@woowacourse/mission-utils';
import doValidate from './Validate.js';

class Game {
  async start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
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
        this.result = this.getResult();
        MissionUtils.Console.print(this.result);
      })
      .catch((err) => {
        MissionUtils.Console.print(err);
      });
  }

  validatePlayerNumber() {
    doValidate(this.playerNumber);
  }

  getResult() {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (parseInt(this.playerNumber[i], 10) === this.computerNumber[i]) {
        strike += 1;
      } else if (this.computerNumber.includes(parseInt(this.playerNumber[i], 10))) {
        ball += 1;
      }
    }

    if (strike === 3) {
      return '3스트라이크';
    } else if (strike > 0 || ball > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }
    return '낫싱';
  }
}

export default Game;
