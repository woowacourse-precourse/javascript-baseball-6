import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/constants.js";
import getComputerNumbers from "./functions/getComputerNumbers.js";
import getUserNumbers from "./functions/getUserNumbers.js";

class App {
  async play() {
    Console.print(MESSAGE.START);

    const computer = await getComputerNumbers();
    const user = await getUserNumbers();
  }
}

const app = new App();
app.play();

export default App;
