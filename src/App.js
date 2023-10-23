import { MissionUtils } from "@woowacourse/mission-utils";
import gameProgress from "./gameProgress.js";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await gameProgress();
  }
}

export default App;
