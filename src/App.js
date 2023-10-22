import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR } from "./lib/constants/error.js";
import { MESSAGE } from "./lib/constants/message.js";
import { WORD } from "./lib/constants/word.js";

class App {
  async play() {
    this.startGame();

    await this.playGame();
  }

  startGame() {
    Console.print(MESSAGE.START);
  }

  async playGame() {
    const randomNumber = this.createRandomNumber();
  }

  createRandomNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      } else {
        throw new Error(ERROR.INPUT_DUPLICATE);
      }
    }

    return computerNumber;
  }
}

const app = new App();
app.play();

module.exports = App;
