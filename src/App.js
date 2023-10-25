import { MissionUtils } from "@woowacourse/mission-utils";
import Game from "./Game.js";

class App {
  
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    const game = new Game();
    await game.runGame();

    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    // 숫자를 입력했는지 검증하기
    if (restart !== "1" && restart !== "2") {
      throw new Error("[ERROR] 잘못된 형식입니다. 1 또는 2를 입력해주세요.");
    }
    if (restart == 1) {
      game.runGame();
    }
    
  }
}

export default App;
