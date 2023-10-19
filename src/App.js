import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {}

  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  makeRamdomNumber() {}

  inputUserNumber() {}

  compareUserAndRamdomNumber() {}

  notifyGameEnd() {}
}

const app = new App();
app.printGameStart();

export default App;
