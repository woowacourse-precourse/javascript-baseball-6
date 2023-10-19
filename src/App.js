import { Console } from "@woowacourse/mission-utils";
import {
  generateComputerNumbers,
  generateResultMessage,
} from "./utils/generate.js";
import { validateUserInputNumber } from "./utils/validation.js";
import { compareNumbers } from "./utils/game.js";
import {
  GAME_START_MESSAGE,
  GAME_WIN_MESSAGE,
  INPUT_NUMBER_MESSAGE,
  RESTART_INFO_MESSAGE,
} from "./constants/info-message.js";

class App {
  async play() {
    Console.print(GAME_START_MESSAGE);

    let userInputNumber;

    while (true) {
      const computerNumbers = generateComputerNumbers();

      do {
        userInputNumber = await Console.readLineAsync(INPUT_NUMBER_MESSAGE);
        validateUserInputNumber(userInputNumber);

        const result = compareNumbers(computerNumbers, userInputNumber);
        const resultMessage = generateResultMessage(result);
        Console.print(resultMessage);
      } while (computerNumbers !== userInputNumber);

      Console.print(GAME_WIN_MESSAGE);
      Console.print(RESTART_INFO_MESSAGE);

      const num = await Console.readLineAsync("");
      if (num === "1") {
        continue;
      }
      if (num === "2") {
        break;
      }
      if (num !== "1" || num !== "2") {
        throw new Error(INVALID_INPUT_ERROR);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
