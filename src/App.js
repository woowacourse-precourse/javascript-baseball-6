import { print, readLineAsync } from "./utils/console.js";
import { pickNumberInRange } from "./utils/random.js";

class App {
  #computer = [];

  async play() {
    this.createComputerNumber();
  }

  createComputerNumber() {
    while (this.#computer.length < 3) {
      const number = pickNumberInRange(1, 9);
      if (this.#computer.includes(number)) continue;
      this.#computer.push(number);
    }
  }
}

export default App;
