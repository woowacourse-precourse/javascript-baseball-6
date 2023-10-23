import { MissionUtils } from "@woowacourse/mission-utils";
import randomNum from "./randomNum.js";
import compareUserNum from "./compareUserNum.js";

class App {
  async play() {
    await randomNum();
    await compareUserNum();
  }
}

const runApp = new App();
runApp.play();

export default App;
