import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT, ERROR, RESTART, ACTION } from "./constants.js";

class App {
  constructor() {
    this.initialPrint();
  }

  initialPrint() {
    MissionUtils.Console.print(TEXT.INITIAL);
  }

  async play() {
    this.computerNumber = this.makeRandomNumber();
    MissionUtils.Console.print(this.computerNumber);
    await this.inputGuessNumber();
  }

  async inputGuessNumber() {
    try {
      const guessNumber = await MissionUtils.Console.readLineAsync(
        TEXT.INPUT_GUESS_NUMBER
      );

      if (!this.validateInput(guessNumber)) {
        throw new Error(ERROR.DUPLICATE_NUMBER_ERROR);
      }

      this.countBallAndStrike(
        this.computerNumber,
        guessNumber.split("").map(Number)
      );
    } catch (error) {
      throw error;
    }
  }

  validateInput(guessNumber) {
    const regExp = /^(?!.*(.).*\1)[1-9]{3}$/;
    return regExp.test(guessNumber);
  }

  makeRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  countBallAndStrike(computerNumber, guessNumber) {
    let b = 0;
    let s = 0;

    computerNumber.forEach((val, i) => {
      if (val === guessNumber[i]) s++;
      else if (guessNumber.includes(val)) b++;
    });

    s === 3 ? this.restartMessage() : this.gameResultMessage(b, s);
  }

  async restartMessage() {
    MissionUtils.Console.print(TEXT.THREE_STRKE_MESSAGE);
    const restartOrExit = await MissionUtils.Console.readLineAsync(
      TEXT.RESTART_OR_EXIT
    );
    if (ACTION[restartOrExit]) {
      ACTION[restartOrExit]();
      return;
    } else {
      throw new Error(ERROR.INVALID_OPTION_ERROR);
    }
  }

  gameResultMessage(ball, strike) {
    const ballmessage = ball > 0 ? `${ball}볼 ` : "";
    const strikeMessage = strike > 0 ? `${strike}스트라이크` : "";
    const result = ballmessage + strikeMessage || "낫싱";
    MissionUtils.Console.print(result);
    this.inputGuessNumber();
    return;
  }
}

const app = new App();
app.play();

export default App;
