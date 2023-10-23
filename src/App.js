import { MissionUtils } from "@woowacourse/mission-utils";
import randomNum from "./randomNum.js";
import userInputNumNum from "./userInputNum.js";

class App {
  async play() {
    await randomNum();
    await userInputNumNum();
  }
}

const runApp = new App();
runApp.play();

export default App;
