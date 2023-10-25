import { printMessage } from "./utils/messages.js";
import { displayResultMessage } from "./displayResultMessage.js";
import { generateComputerNumber, getUserInput } from "./inputValidation.js";
import { countBaseballCounts, askToContinue } from "./gameLogic.js";

class App {
  async play() {
    printMessage("숫자 야구 게임을 시작합니다.");

    while (true) {
      const computerNumber = generateComputerNumber();
      let result = { strike: 0, ball: 0 };

      while (result.strike !== 3) {
        const userInputNumber = await getUserInput();
        result = countBaseballCounts(computerNumber, userInputNumber);
        displayResultMessage(result);
      }

      const isRestarted = await askToContinue();
      if (!isRestarted) {
        break;
      }
    }
  }
}

export default App;
