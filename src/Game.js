import { Random, Console } from "@woowacourse/mission-utils";
import Validation from "./Validation.js";

class Game {
  constructor() {
    this.computerNumber = this.generateComputerNumber();
  }

  startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    return this.inputUserValue();
  }

  generateComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }
    return computerNumber;
  }

  async inputUserValue() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      return this.validateUserInput(userInput);
    } catch (error) {
      Console.print(error);
      throw new Error(error);
    }
  }

  validateUserInput(userInput) {
    Validation.validateType(userInput);
    Validation.validateLength(userInput);
    Validation.validateUnique(userInput);

    return userInput;
  }
}

export default Game;
