import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Computer from "./Computer.js";
import SetOfBalls from "./SetOfBalls.js";

class Game {
  computer;

  constructor(computer) {
    this.computer = computer ?? new Computer();
    Console.print(this.computer.targetNumbers)
    Object.freeze(this.computer);
  }

  // todo: make it simpler
  async round() {
    while (true) {
      try {
        const input = SetOfBalls.checkNumbers(await Console.readLineAsync(Messages.INPUT_NUMBERS));
        const { ball, strike } = this.computer.compareNumbers(input);
        let result = "";

        if (ball > 0) {
          result += `${ball}${Messages.MSG_BALL}`;
        }

        if (strike > 0) {
          if (result !== '') {
            result += ' ';
          }
          result += `${strike}${Messages.MSG_STRIKE}`;
        }

        if (result === '') {
          result += Messages.MSG_NOTHING;
        }

        Console.print(result);

        if (strike === 3) {
          Console.print(Messages.MSG_END);
          return true;
        }
      } catch (error) {
        Console.print(error);
        break ;
      }
    }
  }
}

export default Game;
