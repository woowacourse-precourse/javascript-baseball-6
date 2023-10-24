import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/constants.js";
import getComputerNumbers from "./functions/getComputerNumbers.js";
import getUserNumbers from "./functions/getUserNumbers.js";
import compareNumbers from "./functions/compareNumbers.js";
import printScore from "./functions/printScore.js";

class App {
  async play() {
    Console.print(MESSAGE.START);

    const computer = getComputerNumbers();
    while (true) {
      const user = await getUserNumbers();
      const { strike, ball } = compareNumbers(computer, user);
      printScore(strike, ball);

      if (strike === 3) break;
    }
  }
}

const app = new App();
app.play();

export default App;
