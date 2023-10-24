import { MissionUtils } from "@woowacourse/mission-utils";
import customUtils from "./utils/CustomUtils.js";

class App {
  async play() {
    try {
      const computerNumbers = customUtils.generateComputerNumbers();
      await customUtils.playGame(computerNumbers);
      await customUtils.getRestartChoice(() => this.play());
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
