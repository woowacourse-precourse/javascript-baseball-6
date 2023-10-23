import { MissionUtils } from '@woowacourse/mission-utils';
import doValidate from './Validate.js';

class Game {
  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getComputerNumber();
    this.getPlayerNumber();
  }

  getComputerNumber() {
    this.computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  async getPlayerNumber() {
    MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
      .then((number) => {
        this.playerNumber = number;
        this.validatePlayerNumber();
      })
      .catch((err) => {
        MissionUtils.Console.print(err);
      });
  }
  validatePlayerNumber() {
    doValidate(this.playerNumber);
  }
}

export default Game;
