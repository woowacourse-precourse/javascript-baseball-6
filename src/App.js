import { Console } from '@woowacourse/mission-utils'

class App {
  init() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
  async play() {
    this.init();
  }
}

export default App;
