import { Console, Random } from "@woowacourse/mission-utils";
import {
  ANSWER_TABLE,
  CONTINUE_OR_EXIT_CODE,
  MESSAGE_TABLE,
} from "./constants/index.js";
class App {
  #randomNumber;

  constructor() {
    this.#randomNumber = this.generateRandomNumber();
    this.isContinuous = true;
  }

  async play() {
    Console.print(MESSAGE_TABLE.GAME_START);

    while (this.isContinuous) {
      const userInput = await this.parsingUserInput();

      if (!this.checkValidAnswer(userInput)) {
        Console.print(MESSAGE_TABLE.INVALID_INPUT);
        continue;
      }

      let usersAnswer = this.validateParsedInput(userInput);
      const computerAnswer = "0b3s";

      this.printResult(usersAnswer);

      if (usersAnswer === computerAnswer) {
        Console.print(MESSAGE_TABLE.CORRECT_ANSWER);
        this.isContinuous = false;
        await this.checkContinueOrExit();
      }
    }
  }
}

const app = new App();
app.play();

export default App;
