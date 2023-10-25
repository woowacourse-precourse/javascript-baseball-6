import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answer = null;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = this.generateAnswer();
    await this.runGame();
  }

}

export default App;
