import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.infoPrint('숫자 야구 게임을 시작합니다.');
    this.computerNumber();
  }

  infoPrint(message) {
    MissionUtils.Console.print(message);
  }

  computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

export default App;

const app = new App();
app.play();
