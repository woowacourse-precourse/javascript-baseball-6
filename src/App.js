import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.infoPrint('숫자 야구 게임을 시작합니다.');
  }

  infoPrint(message) {
    MissionUtils.Console.print(message);
  }
}

export default App;

const app = new App();
app.play();
