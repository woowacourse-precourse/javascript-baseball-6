import MESSAGES from "./Messages";
import { MissionUtils } from "@woowacourse/mission-utils";
import BaseballGame from "./BaseballGame";
class App {
  async play() {
    MissionUtils.Console.print(MESSAGES.GAME_START);
    const game = new BaseballGame(1, 9, 3);
    try {
      await game.start();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
