import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answer = [];
  }

  async play() {
    this.gameStartMessage();
  }

  gameStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

export default App;
