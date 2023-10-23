import { MissionUtils } from "@woowacourse/mission-utils";
import randomNum from "./randomNum.js";
import userInputNum from "./userInputNum.js";

class App {
  async play() {
    await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await randomNum();
    await userInputNum();
  }
}

const runApp = new App();
runApp.play();

export default App;
