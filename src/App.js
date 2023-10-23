import { MissionUtils } from "@woowacourse/mission-utils";
import start from "./Play/PlayGame";

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    start();
  }
}

export default App;
