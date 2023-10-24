import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.NEW_GAME = "1";
    this.QUIT_GAME = "2";
  }

  async play() {
    let CONTINUE_PLAYING = true;

    while (CONTINUE_PLAYING) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다");
      const { strike, ball } = this.start();
    }
  }
}

const app = new App();
app.play();

export default App;
