import { MissionUtils } from "@woowacourse/mission-utils";
import { INIT } from "./GameCode/game";
import { START_MESSAGE } from "./Text/message";

class App {
  async play() {
    MissionUtils.Console.print(START_MESSAGE.initial);
    await INIT();
  }
}
const app = new App();
app.play();

export default App;
