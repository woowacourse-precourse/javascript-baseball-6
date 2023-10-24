import { Console } from '@woowacourse/mission-utils';

class Game {
  constructor() {
    this.gameCount = 0;
  }

  start() {
    this.gameCount
      ? Console.print(`플레이한 게임 수: ${this.gameCount}`)
      : Console.print('숫자 야구 게임을 시작합니다.');
  }
}

export default Game;
