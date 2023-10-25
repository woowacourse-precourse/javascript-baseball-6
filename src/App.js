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

  validateParsedInput(userInput) {
    let strikeCount = 0;
    let ballCount = 0;

    userInput.forEach((num, idx) => {
      if (!this.#randomNumber.includes(num)) return;

      if (this.#randomNumber.indexOf(num) === idx) {
        strikeCount++;
      } else {
        ballCount++;
      }
    });

    return `${ballCount}b${strikeCount}s`;
  }
}

const app = new App();
app.play();

export default App;
