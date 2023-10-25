import { MissionUtils } from "@woowacourse/mission-utils";
import { getRandomNum, getRestartNum } from "./components/NumberSet";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await getRandomNum();
  }

  async exitGame() {
    const restart = getRestartNum();
    if (restart === "1") {
      getRandomNum();
    } else if (restart === "2") {
      MissionUtils.Console.print("게임 종료");
    } else {
      throw new Error("[ERROR] 1 또는 2를 입력해야합니다.");
    }
  }
}

export default App;
