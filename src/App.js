import { MissionUtils } from '@woowacourse/mission-utils';

const Message = {
  START: '숫자 야구 게임을 시작합니다.',
};

class App {
  computer = [];

  printStartMessage() {
    MissionUtils.Console.print(Message.START);
  }

  pickComputerNumbers() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async play() {
    this.printStartMessage();
    this.pickComputerNumbers();
    console.log(this.computer);
  }
}

const app = new App();
app.play();

export default App;
