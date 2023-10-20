import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";
import ERROR from "./constant/ERROR.js";
import Computer from "./Computer.js";

class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  async play() {
    this.startGame();
    this.computerNumber = new Computer().createNumbers();
    Console.print(this.computerNumber);
    this.userNumber = await this.getUserInput();
  }

  printMessage(message) {
    Console.print(message);
  }

  startGame() {
    this.printMessage(MESSAGE.START_GAME);
  }

  async getUserInput() {
    const userInput = await Console.readLineAsync(MESSAGE.ENTER_NUMBER);
    return this.validateUserInput(userInput)
      .split("")
      .map((string) => +string);
  }

  validateUserInput(input) {
    if (!this.isNotEmpty(input)) throw new Error(ERROR.EMPTY_INPUT);
    if (!this.isValidNumber(input)) throw new Error(ERROR.INVALID_NUMBER);
    if (!this.areDigitsUnique(input)) throw new Error(ERROR.NON_UNIQUE_DIGITS);

    return input;
  }

  isNotEmpty(input) {
    return input !== null && input.trim() !== "";
  }

  isValidNumber(input) {
    return /^[1-9]{3}$/.test(input);
  }

  areDigitsUnique(input) {
    const uniqueDigits = [...new Set(input)];
    return uniqueDigits.length === input.length;
  }
}

export default App;
