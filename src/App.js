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

    let isCorrect = false;

    while (!isCorrect) {
      const user = await this.inputUserNumber();
      const comparedResult = this.compareNumber(user, randomNumber);
    }
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

  async inputUserNumber() {
    const input = await Console.readLineAsync(MESSAGE.INPUT);

    if (input.length !== 3) {
      throw new Error(ERROR.INPUT_USER_NUMBER_LENGTH);
    }

    const numbers = input.split("").map((value) => parseInt(value));

    if (numbers.includes(NaN)) {
      throw new Error(ERROR.INPUT_DATA_TYPE);
    }

    return numbers;
  }

  compareNumber(user, random) {
    const result = { ball: 0, strike: 0 };

    user.forEach((userNumber, index) => {
      if (random.includes(userNumber)) {
        if (random.indexOf(userNumber) === index) {
          result.strike++;
        } else {
          result.ball++;
        }
      }
    });

    return result;
  }
}

const app = new App();
app.play();

module.exports = App;
