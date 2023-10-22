import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.userNum = '';
  }

  init() {
    this.userNum = '';
  }

  async play() {}

  // 유저 입력 처리
  async userInput() {
    this.userNum =
      await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  }
}

const app = new App();
app.play();

export default App;
