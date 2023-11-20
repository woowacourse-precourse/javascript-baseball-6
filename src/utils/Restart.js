import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../Constants";

class Restart {
  async restart() {
    console.log(CONSOLE_MESSAGE.NEW_GAME_OR_EXIT);
    let input = await Console.readLineAsync("");
    if (String(input) === "1") return true;
    else if (String(input) === "2") return false;
    else throw new Error("[ERROR] 1 혹은 2가 아닌 값을 입력하였습니다");
  }
}
export default Restart;
