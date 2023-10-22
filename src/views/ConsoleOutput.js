import { Console } from "@woowacourse/mission-utils";
import { GAME_START_MESSAGE } from "../constants/Constants.js";

class ConsoleOutput {
  printStartMessage() {
    Console.print(GAME_START_MESSAGE);
  }
}

export default ConsoleOutput;
