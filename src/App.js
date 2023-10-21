import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Computer from "./Computer.js";

class App {
  async play() {
    Console.print(Messages.MSG_START);
    const computer = new Computer();
    Console.print(computer.targetNumbers);
  }
}

App.prototype.play();

export default App;
