//import readline from "readline";
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

  //추측값 입력
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
      //throw new Error(ERROR.DUPLICATE_NUMBER_ERROR);
    }
  }
  //입력한 값이 서로 다른 3자리 수인지 체크
  validateInput(guessNumber) {
    return new Set(guessNumber).size !== 3 || isNaN(Number(guessNumber))
      ? false
      : true;
  }
  //랜덤 값 생성
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

  //볼, 스트라이크 개수 체크
  countBallAndStrike(computerNumber, guessNumber) {
    let b = 0;
    let s = 0;

    computerNumber.forEach((val, i) => {
      if (val === guessNumber[i]) s++;
      else if (guessNumber.includes(val)) b++;
    });

    s === 3 ? this.restartMessage() : this.gameResultMessage(b, s);
  }

  //게임 끝난 직후 재시작/종료 메시지 출력
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

  //게임 결과 출력
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
