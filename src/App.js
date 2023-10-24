import { Console } from "@woowacourse/mission-utils";
import {
  validateUserSelectNumber,
  GAME_EXIT,
} from "./utils/game-control-validation.js";
import { validateUserInputNumber } from "./utils/number-validation.js";
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

      // 1(GAME_RESTART) 재시작, 2(GAME_EXIT) 종료
      userSelectNumber = await Console.readLineAsync("");
      validateUserSelectNumber(userSelectNumber);
    } while (userSelectNumber !== GAME_EXIT);
  }
}

const app = new App();
app.play();

export default App;
