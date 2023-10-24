import { MissionUtils } from "@woowacourse/mission-utils";
import { gameInit } from "./play";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await gameInit();
  }
}

export default App;