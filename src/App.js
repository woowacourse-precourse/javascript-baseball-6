import gameLoop from "./game/gameLoop.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "./utils/message.js";

class App {
  async play() {
    try {
      MissionUtils.Console.print(GAME_MESSAGES.GAME_START);
      await gameLoop();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;