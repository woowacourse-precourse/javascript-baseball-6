import { MissionUtils } from "@woowacourse/mission-utils";
import { RESULT, TEXT, ERROR, RESTART, ACTION } from "./constants.js";

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
        [...guessNumber].map(Number)
      );
    } catch (error) {
      throw error;
    }
  }

  //입력값이 서로 다른 3자리 수인지 체크
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
    let count = {
      ball: 0,
      strike: 0,
    };

    computerNumber.forEach((val, i) => {
      if (val === guessNumber[i]) count.strike += 1;
      else if (guessNumber.includes(val)) count.ball += 1;
    });

    if (count.strike === 3) this.restartMessage();
    else this.gameResultMessage(count.ball, count.strike);
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
    const result =
      (ball > 0 ? `${ball}${RESULT.BALL} ` : "") +
        (strike > 0 ? `${strike}${RESULT.STRIKE}` : "") || RESULT.NOTHING;

    MissionUtils.Console.print(result);
    this.inputGuessNumber();
    return;
  }
}

const app = new App();
app.play();

export default App;
