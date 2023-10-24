import { MissionUtils } from "@woowacourse/mission-utils";
import initialStartGame from "./game/playGame.js";
class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    try {
      await initialStartGame();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
