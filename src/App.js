import { Console, Random } from "@woowacourse/mission-utils";
const InputError = require("./lib/utils/error.js");
const { MESSAGE } = require("./lib/constants/message.js");
const { WORD } = require("./lib/constants/word.js");

class App {
  constructor() {
    this.Error = new InputError();
  }

  async play() {
    this.startGame();

    do {
      await this.playGame();
    } while (await this.replayGame());
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
      isCorrect = this.checkComparedResult(comparedResult);
    }
  }

  createRandomNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    return computerNumber;
  }

  async inputUserNumber() {
    const input = await Console.readLineAsync(MESSAGE.INPUT);
    this.Error.validateUserInput(input);
    const numbers = input.split("").map((value) => Number(value));

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

  checkComparedResult(result) {
    let resultMessage = "";

    if (result.strike === 0 && result.ball === 0) {
      resultMessage += WORD.NOTHING;
    }

    if (result.ball > 0) {
      resultMessage += `${result.ball}${WORD.BALL} `;
    }

    if (result.strike > 0) {
      resultMessage += `${result.strike}${WORD.STRIKE}`;
    }

    Console.print(resultMessage);

    if (result.strike === 3) {
      Console.print(MESSAGE.FINISH);
      return true;
    } else {
      return false;
    }
  }

  async replayGame() {
    const input = await Console.readLineAsync(MESSAGE.REPLAY);

    switch (input) {
      case WORD.RETRY:
        return true;
      case WORD.EXIT:
        return false;
      default:
        this.Error.validateUserInput(input);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
