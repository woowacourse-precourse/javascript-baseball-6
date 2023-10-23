import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Computer from "./Computer.js";
import SetOfBalls from "./SetOfBalls.js";

class Game {
  computer;

  constructor(computer) {
    this.computer = computer ?? new Computer();
    Object.freeze(this.computer);
  }

  async round() {
    while (true) {
      try {
        const userNumbers = await this.getUserInputAsync();
        if (userNumbers === null) {
          return false;
        }
        const result = this.computer.compareNumbers(userNumbers);
        if (result === null) {
          return false;
        }
        Console.print(result);
        if (result === "3스트라이크") {
          Console.print(Messages.MSG_END);
          return true;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async menu() {
    try {
      const choosen = await this.getUserMenuAsync();
      Console.print(choosen);
      return Number(choosen);
    } catch (e) {
      return 0;
    }
  }

  async getUserInputAsync() {
    const input = await Console.readLineAsync(Messages.INPUT_NUMBERS);
    Console.print(input);
    if (!SetOfBalls.checkNumbers(input)) {
      return null;
    }
    return new SetOfBalls(input.split('').map(Number));
  }

  async getUserMenuAsync() {
    try {
      const input = await Console.readLineAsync(Messages.INPUT_MENU + '\n');
      if (input !== '1' && input !== '2') {
        throw new Error(Messages.ERROR_MENU);
      }
      return input;
    } catch (e) {
      throw new Error(Messages.ERROR_MENU);
    }
  }
}

export default Game;
