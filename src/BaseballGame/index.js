import { print, readLineAsync } from "../utils/console.js";
import { QUIT } from "../constants/input.js";
import { MESSAGE } from "../constants/message.js";
import { validateOnlyRestartOrQuit } from "../validates/restartOrQuit.js";
import Computer from "./Computer.js";
import User from "./User.js";
import Referee from "./Referee.js";

class BaseballGame {
  async gameStart() {
    const computer = new Computer();
    const user = new User();
    const referee = new Referee();

    computer.createNumbers();

    while (true) {
      await user.guessNumbers();

      const isStrikeThree = referee.judge(
        computer.getNumbers(),
        user.getNumbers()
      );

      if (isStrikeThree) {
        print(MESSAGE.GAME_OVER);
        return;
      }
    }
  }

  async gameOver() {
    const answer = await readLineAsync(MESSAGE.RESTART_OR_QUIT);

    validateOnlyRestartOrQuit(answer);

    if (answer === QUIT) {
      print(MESSAGE.APPLICATION_TERMINATED);
      return false;
    }

    return true;
  }
}

export default BaseballGame;
