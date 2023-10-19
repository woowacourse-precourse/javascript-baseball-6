import { Console } from "@woowacourse/mission-utils";
import {
  validateUserInputNumber,
  validateUserSelectNumber,
} from "./utils/validation.js";
import {
  generateComputerNumbers,
  compareNumbers,
  printResultMessage,
} from "./utils/game.js";
import {
  GAME_START_MESSAGE,
  GAME_WIN_MESSAGE,
  INPUT_NUMBER_MESSAGE,
  RESTART_INFO_MESSAGE,
} from "./constants/info-message.js";
import { GAME_EXIT } from "./constants/game-control.js";

class App {
  async play() {
    Console.print(GAME_START_MESSAGE);

    let userInputNumber;
    let userSelectNumber;

    do {
      const computerNumbers = generateComputerNumbers();

      do {
        userInputNumber = await Console.readLineAsync(INPUT_NUMBER_MESSAGE);
        validateUserInputNumber(userInputNumber);

        const result = compareNumbers(computerNumbers, userInputNumber);
        printResultMessage(result);
      } while (computerNumbers !== userInputNumber);

      Console.print(GAME_WIN_MESSAGE);
      Console.print(RESTART_INFO_MESSAGE);

      userSelectNumber = await Console.readLineAsync("");
      validateUserSelectNumber(userSelectNumber);
    } while (userSelectNumber !== GAME_EXIT);
  }
}

const app = new App();
app.play();

export default App;
