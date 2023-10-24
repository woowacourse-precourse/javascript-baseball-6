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
        const result = this.computer.compareNumbers(userNumbers);

        Console.print(result);
        if (result === Messages.END_CONDITION) {
          Console.print(Messages.MSG_END);

          return true;
        }
      } catch (error) {
        throw error;
      }
    }
  }

  async menu() {
    try {
      const choosen = await this.getUserMenuAsync();

      return Number(choosen);
    } catch (error) {
      throw error;
    }
  }

  async getUserInputAsync() {
    const input = await Console.readLineAsync(Messages.INPUT_NUMBERS);
    if (!SetOfBalls.checkNumbers(input)) {
      throw new Error(Messages.ERROR_INPUT);
    }

    return new SetOfBalls(input.split('').map(Number));
  }

  async getUserMenuAsync() {
    const input = await Console.readLineAsync(Messages.INPUT_MENU + '\n');
    if (input !== '1' && input !== '2') {
      throw new Error(Messages.ERROR_MENU);
    }

    return input;
  }
}

export default Game;
