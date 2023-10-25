import { MissionUtils } from "@woowacourse/mission-utils";
import playAGame from "./baseball-game/playAGame.js";
import { GAME_MESSAGE } from "./constants.js";
import { getThreeDistinctNumbers } from "./utils/array.js";

class App {
  async play() {
    while (true) {
      const computerNumbers = getThreeDistinctNumbers();

      MissionUtils.Console.print(GAME_MESSAGE.START);

      const { isRestart } = await playAGame(computerNumbers);

      if (!isRestart) return;
    }
  }
}

export default App;
