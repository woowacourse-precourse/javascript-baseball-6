import { Console } from "@woowacourse/mission-utils";
import { CONSTANT } from "./common";
import Computer from "./model/Computer";
import Validator from "./model/Validator";
import Judge from "./model/Judge";
class App {
  async play() {
    Console.print(CONSTANT.GAME_START);

    const computer = new Computer();
    let computerNumber = computer.createNumber();

    const validator = new Validator();
    const judge = new Judge();

    while (true) {
      const user = await Console.readLineAsync(CONSTANT.INPUT_NUMBER);
      await validator.checkAnswerNumber(user);

      const [strike, ball] = judge.getCount(computerNumber, user);
      const result = judge.getResult(strike, ball);
      Console.print(result);

      if (result === CONSTANT.ALL_CORRECT_RESULT) {
        Console.print(CONSTANT.GAME_OVER_MESSAGE);
        const restart = await Console.readLineAsync(CONSTANT.RESTART_MESSAGE);
        await validator.checkRestartNumber(restart);
        if (restart === CONSTANT.GAME_OVER_INPUT) break;
        computerNumber = computer.createNumber();
      }
    }
  }
}

export default App;
