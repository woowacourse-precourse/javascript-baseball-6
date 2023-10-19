import { Console } from '@woowacourse/mission-utils';

const printStartMessage = () => {
  Console.print('숫자 야구 게임을 시작합니다.');
};

class App {
  async play() {
    printStartMessage();
  }
}

const app = new App();
app.play();

export default App;
