import { MissionUtils } from "@woowacourse/mission-utils";
import { Game } from "./game.js";

class App {
  async play() {
    try {
      const newGame = new Game();
      await newGame.playBall();
      this.suggestNewGame();
    } catch (e) {
      MissionUtils.Console.print(e);
      throw e;
    }
  }

  async suggestNewGame() {
    const input = await MissionUtils.Console.readLineAsync(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`
    );
    if (input === "1") {
      await this.play();
    } else return;
  }
}

export default App;

// const app = new App();
// app.play();
