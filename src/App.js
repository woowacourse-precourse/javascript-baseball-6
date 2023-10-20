import { Console } from '@woowacourse/mission-utils';

class App {
  showStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    this.showStartMessage();
  }
}

const app = new App();
app.play();

export default App;
