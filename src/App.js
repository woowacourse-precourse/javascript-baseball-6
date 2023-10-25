import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, GAME_STATE } from "./constants";
import { getComputerNumber } from "./utils/getNumber";
import { startPitching } from "./utils/startPitching";
import { newGame } from "./utils/newGame";

class App {
  constructor() {
    this.state = GAME_STATE.init;
  }

  async play() {
    MissionUtils.Console.print(GAME_MESSAGE.start);
    while (this.state) {
      const computerNumber = getComputerNumber();
      this.state = await startPitching(computerNumber);

      if (this.state === GAME_STATE.strike) {
        this.state = await newGame();
      }

      if (this.state === GAME_STATE.end) {
        return;
      }
    }
  }
}

export default App;
