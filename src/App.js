import { Console } from "@woowacourse/mission-utils";
import generateNum from "./generateNum.js";

class App {
  async play() {
    const computer = generateNum({ length: 3 });
    Console.print(computer);
  }
}

const app = new App();
app.play();

export default App;
