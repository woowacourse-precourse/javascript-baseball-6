import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/Constants.js";

class ConsoleOutput {
  printStartMessage() {
    Console.print(MESSAGES.GAME_START);
  }
}

export default ConsoleOutput;
