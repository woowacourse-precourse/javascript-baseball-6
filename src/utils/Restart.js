import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from "../Constants.js";

class Restart {
  async restart() {
    console.log(CONSOLE_MESSAGE.NEW_GAME_OR_EXIT);
    let input = await Console.readLineAsync("");
    if (String(input) === "1") return true;
    else if (String(input) === "2") return false;
    else throw new Error(ERROR_MESSAGE.NEITHER_1_NOR_2);
  }
}
export default Restart;
