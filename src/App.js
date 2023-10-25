import { Console, Random } from "@woowacourse/mission-utils";
import {
  ANSWER_TABLE,
  CONTINUE_OR_EXIT_CODE,
  MESSAGE_TABLE,
} from "./constants/index.js";
class App {
  #randomNumber;

  constructor() {
    this.#randomNumber = this.generateRandomNumber();
    this.isContinuous = true;
  }

  generateRandomNumber() {
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }

    return randomNumber;
  }
}

const app = new App();
app.play();

export default App;
