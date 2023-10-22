import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getComputerNumber();
  }

  getComputerNumber() {
    this.computerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

export default Game;
