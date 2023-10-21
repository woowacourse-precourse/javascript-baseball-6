import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let gameOver = true;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (gameOver) {
      const COM_NUMBER = this.createNumber();

      while (true) {
        try {
          if (await this.playRound(COM_NUMBER)) {
            gameOver = await this.restartGameDecision();
            break;
          }
        } catch (error) {
          if (error.message === "[ERROR]") {
            return;
          }
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
