import { Console } from '@woowacourse/mission-utils';

class Game {
  constructor() {
    this.gameCount = 0;
  }

  start() {
    this.gameCount
      ? Console.print(`플레이한 게임 수: ${this.gameCount}`)
      : Console.print('숫자 야구 게임을 시작합니다.');

    this.getUserInput();
  }

  async getUserInput() {
    const USER_INPUT = await Console.readLineAsync(
      '1~9를 이용하여 각 자리가 중복되지 않는 세자리 숫자를 입력해주세요 : '
    );
  }
}

export default Game;
