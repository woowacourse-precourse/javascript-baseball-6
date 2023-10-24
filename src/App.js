import { MissionUtils } from "@woowacourse/mission-utils";
import CustomUtils from "./utils/CustomUtils.js";

class App {
  async play() {
    try {
      const computerNumbers = CustomUtils.generateComputerNumbers();
      await CustomUtils.playGame(computerNumbers);
      await CustomUtils.getRestartChoice(() => this.play());
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
