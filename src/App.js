import { MissionUtils } from '@woowacourse/mission-utils';

const Message = {
  START: '숫자 야구 게임을 시작합니다.',
};

class App {
  printStartMessage() {
    MissionUtils.Console.print(Message.START);
  }

  async play() {
    this.printStartMessage();
  }
}

const app = new App();
app.play();

export default App;
