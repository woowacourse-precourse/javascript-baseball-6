import { MissionUtils } from "@woowacourse/mission-utils";
import { gameinit } from "./play";

class App {
  async play() {
    // 뭔가 시간이 오래걸리는 작업  
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await gameinit();
  }
}

export default App;
