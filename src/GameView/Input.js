import { Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "../utils/Constants.js";

class Input {
  async getPlayerGuess() {
    const inputNumbers = await Console.readLineAsync(GAME.INPUT_NUMBERS);
    return inputNumbers;
  }

  async askRestart() {
    const choice = await Console.readLineAsync(GAME.ASK_REGAME_OR_ENDGAME);
    if (choice === GAME.CHOOSE_FINISH) {
      Console.print(GAME.GAME_ENDED);
      return true;
    }
    if (choice === GAME.CHOOSE_RESTART) {
      return false;
    }
    throw new Error(ERROR.INVALID_CHOICE);
  }
}
export default Input;
