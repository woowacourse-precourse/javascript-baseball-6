import { MissionUtils } from "@woowacourse/mission-utils";
const INIT = require("./GameCode/game");

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    INIT();
  }
}

export default App;
