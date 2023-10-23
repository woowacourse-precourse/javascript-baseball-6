import { MissionUtils } from "@woowacourse/mission-utils";
import { playAGame } from "./baseball-game.js";
import { getThreeDistinctNumbers } from "./utils/array.js";

class App {
  async play() {
    while (true) {
      const computerNumbers = getThreeDistinctNumbers();

      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      const { isRestart } = await playAGame(computerNumbers);
      
      if (!isRestart) return;
    }
  }
}

export default App;
