import { MissionUtils } from "@woowacourse/mission-utils"

const INTRO_SENTENCE = "숫자 야구 게임을 시작합니다.\n";

class App {
  async play() {
    MissionUtils.Console.print(INTRO_SENTENCE);
  }
}

export default App;
