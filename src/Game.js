import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Computer from "./Computer.js";
import SetOfBalls from "./SetOfBalls.js";

class Game {
  computer;

  constructor(computer) {
    this.computer = computer ?? new Computer();
    // Console.print(this.computer.targetNumbers)
    Object.freeze(this.computer);
  }

  // todo: make it simpler
  async round() {
    while (true) {
      const userNumbers = await this.getUserInputAsync();
      const result = this.computer.compareNumbers(userNumbers);
      if (result === null) {
        throw new Error(Messages.ERROR_INPUT);
      }

      Console.print(result);
      if (result === "3스트라이크") {
        Console.print(Messages.MSG_END);
        return true;
      }
    }
  }

  async menu() {
    const choosen = await this.getUserMenuAsync();
    if (choosen === '0') {
      throw new Error(Messages.ERROR_MENU);
    }

    if (choosen === '1') {
      return true;
    } else if (choosen === '2') {
      Console.print(Messages.MSG_END);
      return false;
    }
  }

  async getUserInputAsync() {
    const input = await Console.readLineAsync(Messages.INPUT_NUMBERS);
    if (!SetOfBalls.checkNumbers(input)) {
      return null;
    }
    return new SetOfBalls(input.split('').map(Number));
  }

  async getUserMenuAsync() {
    const input = await Console.readLineAsync(Messages.INPUT_MENU + '\n');
    if (input !== '1' && input !== '2') {
      return '0';
    }
    return input;
  }

}

export default Game;
