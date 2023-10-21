import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";

class App {
  async play() {
    Console.print(Messages.MSG_START);
  }
}

App.prototype.play();

export default App;
