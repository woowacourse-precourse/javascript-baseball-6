import { Console } from "@woowacourse/mission-utils";

import { checkRepeatGame } from "./components/checkRepeatGame";
import { compareComputerAndUser } from "./components/compareComputerAndUser";
import { getComputerNumber } from "./components/getComputerNumber";
import { getUsernumber } from "./components/getUserNumber";
import { printCompareResult } from "./components/printCompareResult";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let restartFlag = 1;

    while (restartFlag === 1) {
      const computer = getComputerNumber();
      let isAnswer = 0;

      while (!isAnswer) {
        const user = await getUsernumber();
        const compareResult = await compareComputerAndUser(computer, user);

        await printCompareResult(compareResult);

        if (compareResult.strike === 3) {
          isAnswer = 1;
          restartFlag = await checkRepeatGame();
        }
      }
    }
  }
}

export default App;

const app = new App();
app.play();
