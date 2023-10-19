import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./messages/messages";

class App {
  constructor() {
    this.pick = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.message = MissionUtils.Console.print(MESSAGES.GAME_PROCESS.START);
  }
}

const app = new App();
app.play();

export default App;
