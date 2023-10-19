import { Console } from "@woowacourse/mission-utils";
import {
  generateComputerNumbers,
  generateResultMessage,
} from "./utils/generate.js";
import {
  isDuplicationError,
  isLengthError,
  isNumberError,
} from "./utils/validation.js";
import { compareNumbers } from "./utils/game.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const computerNumbers = generateComputerNumbers();

      while (true) {
        const userNumbers = await Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
        isLengthError(userNumbers);
        isDuplicationError(userNumbers);
        isNumberError(userNumbers);

        const result = compareNumbers(computerNumbers, userNumbers);
        const resultMessage = generateResultMessage(result);
        Console.print(resultMessage);

        if (computerNumbers === userNumbers) {
          break;
        }
      }

      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

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
