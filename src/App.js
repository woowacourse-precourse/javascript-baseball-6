import { MissionUtils } from "@woowacourse/mission-utils";
import { gameStart } from "./BaseballGame";

class App {
  async play() {
    try {
      // 0. 게임 시작 메세지 출력
      MissionUtils.Console.print(GAME_MSG.START);
      await gameStart();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
