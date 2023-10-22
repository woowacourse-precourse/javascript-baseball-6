import { MissionUtils } from "@woowacourse/mission-utils";
import { gameinit } from "./play";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await gameinit();
  }
}

export default App;