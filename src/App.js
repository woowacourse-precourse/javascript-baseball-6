import { Console } from "@woowacourse/mission-utils";
import { randomNumber } from "./random-number.js";

class App {
  constructor() {
    this.computer = randomNumber();
  }

  async play() {

  }
}

export default App;

const app = new App();
app.play();