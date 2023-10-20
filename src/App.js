import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";
import NUMBER from "./constant/NUMBER.js";

class App {
  constructor() {
    this.computerNumber = [];
  }

  async play() {
    this.startGame();
    this.chooseComputerNumber();
  }

  printMessage(message) {
    Console.print(message);
  }

  startGame() {
    this.printMessage(MESSAGE.START);
  }

  chooseComputerNumber() {
    while (this.computerNumber.length < 3) {
      let randomNumber = this.generateSingleDigitNaturalNumber();

      if (this.computerNumber.includes(randomNumber)) continue;
      this.computerNumber.push(randomNumber);
    }
  }

  generateSingleDigitNaturalNumber() {
    return Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
  }
}

export default App;
