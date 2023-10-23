import { MissionUtils } from "@woowacourse/mission-utils";
import { playAGame } from "./baseball-game.js";
import { getThreeDistinctNumbers } from "./utils/array.js";

class App {
  async play() {
    while (true) {
      const computerNumbers = getThreeDistinctNumbers();

      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

      const { isContinue } = await playAGame(computerNumbers);
      
      if (!isContinue) return;
    }
  }
}

export default App;
