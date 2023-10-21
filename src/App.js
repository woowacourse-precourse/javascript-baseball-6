import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Computer from "./Computer.js";
import Numbers from "./Numbers.js";

class App {
  async play() {
    Console.print(Messages.MSG_START);
    const computer = new Computer();
    Console.print(computer.targetNumbers);

    // todo: repeat until user input and computer target numbers are same
    // todo: print result (strike, ball)
    // todo: make Game class!
    try {
      const input = await Console.readLineAsync(Messages.INPUT_NUMBERS);
      const numbers = Numbers.checkNumbers(input);
      Console.print(numbers);
    } catch (error) {
      Console.print(error);
    }
    // todo: print game menu (to decide restart or end game)
  }
}

App.prototype.play();

export default App;
