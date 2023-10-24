import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/constants.js";

class App {
  async play() {
    Console.print(MESSAGE.START);
  }
}

const app = new App();
app.play();

export default App;
