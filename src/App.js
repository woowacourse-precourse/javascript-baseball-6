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

  generateRandomNumber() {
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }

    return randomNumber;
  }

  async parsingUserInput() {
    const userInput = await Console.readLineAsync(MESSAGE_TABLE.REQUIRED_INPUT);

    if (!userInput || userInput.trim() === "") {
      throw new Error(MESSAGE_TABLE.ERROR_INPUT);
    }

    return userInput.trim().split("").map(Number);
  }

  checkValidAnswer(userInput) {
    const condition =
      userInput.length !== 3 ||
      new Set(userInput).size !== 3 ||
      userInput.some(isNaN);

    if (condition) {
      return false;
    }

    return true;
  }
}

const app = new App();
app.play();

export default App;
