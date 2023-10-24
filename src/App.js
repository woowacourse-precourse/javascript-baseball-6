import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/constants.js";
import { getComputerNumbers } from "./functions/getComputerNumbers.js";

class App {
  async play() {
    Console.print(MESSAGE.START);

    const computer = await getComputerNumbers();
  }
}

const app = new App();
app.play();

export default App;
