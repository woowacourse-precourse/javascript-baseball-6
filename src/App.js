import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MSG } from "./Messages";
import { compareNum } from "./baseballGame/baseballGame";

class App {
  async play() {
    try {
      MissionUtils.Console.print(GAME_MSG.START);
      await compareNum();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

const app = new App();
app.play();

export default App;
