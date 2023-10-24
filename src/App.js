import { Console } from "@woowacourse/mission-utils";
import { getComputer } from "./getComputer.js";
import { getUser } from "./getUser.js";
import { getResult } from "./getResult.js";
import { restartHandler } from "./restartHandler.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computer = getComputer();
    
    while(true) {
      const USER = await getUser();
      let correct = getResult(computer, USER);

      if (correct) {
        const RESTART = await restartHandler();

        if (RESTART === 1) {
          computer = getComputer();
        } else {
          break;
        }
      }
    }
  }
}

export default App;
