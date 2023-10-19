import { Console } from "@woowacourse/mission-utils";
import {
  generateComputerNumbers,
  printResultMessage,
} from "./utils/generate.js";
import { validateUserInputNumber } from "./utils/validation.js";
import { compareNumbers } from "./utils/game.js";
import {
  GAME_START_MESSAGE,
  GAME_WIN_MESSAGE,
  INPUT_NUMBER_MESSAGE,
  RESTART_INFO_MESSAGE,
} from "./constants/info-message.js";
import { GAME_EXIT, GAME_RESTART } from "./constants/game.js";

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
        printResultMessage(result);
      } while (computerNumbers !== userInputNumber);

      Console.print(GAME_WIN_MESSAGE);
      Console.print(RESTART_INFO_MESSAGE);

      const num = await Console.readLineAsync("");
      if (num === GAME_RESTART) {
        continue;
      }
      if (num === GAME_EXIT) {
        break;
      }
      if (num !== GAME_RESTART || num !== GAME_RESTART) {
        throw new Error(INVALID_INPUT_ERROR);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
