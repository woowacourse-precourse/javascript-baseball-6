import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.CONTINUE_PLAYING = true;
    this.NEW_GAME = "1";
    this.QUIT_GAME = "2";
  }

  async play() {
    while (this.CONTINUE_PLAYING) {
      console.log("숫자 야구 게임을 시작합니다");
      const { strike, ball } = this.start();
      this.CONTINUE_PLAYING = strike !== 3;
      this.printGameResultMessage(strike, ball);
      if (!this.CONTINUE_PLAYING) {
        this.CONTINUE_PLAYING = await this.shouldContinue();
      }
    }
  }
}

const app = new App();
app.play();

export default App;
