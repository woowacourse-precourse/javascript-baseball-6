import { MissionUtils } from "@woowacourse/mission-utils";
import { Game } from "./Game.js"; // 코드 작성 도중 파일명 대문자 변경 후 버그성 에러 검출

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
    let input;
    do {
      input = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      if (input === "1") {
        await this.play();
      }
    } while (input !== "1" && input !== "2");
  }
}
export default App;

// const app = new App();
// app.play();
