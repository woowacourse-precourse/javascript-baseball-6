//import readline from "readline";
import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT, ERROR, RESTART } from "./constants.js";

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
      const guess = await MissionUtils.Console.readLineAsync(
        TEXT.INPUT_GUESS_NUMBER
      );

      if (!this.duplicateCheck(guess)) {
        throw new Error(ERROR.DUPLICATE_NUMBER_ERROR);
      }

      this.countBallAndStrike(this.computerNumber, guess);
    } catch (error) {
      throw error;
      //throw new Error(ERROR.DUPLICATE_NUMBER_ERROR);
    }
  }
  //추측한 값 중복 체크
  duplicateCheck(guess) {
    return new Set(guess).size !== 3 || isNaN(Number(guess)) ? false : true;
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
  countBallAndStrike(computerNumber, guess) {
    let b = 0;
    let s = 0;

    const stringComputerNumberArray = computerNumber.map(String);
    const stringGuessArray = guess.split("");
    //MissionUtils.Console.print("num : " + computerNumber);
    stringComputerNumberArray.forEach((val, i) => {
      if (stringGuessArray.indexOf(val) !== -1) {
        if (stringGuessArray.indexOf(val) === i) {
          s++;
        } else {
          b++;
        }
      }
    });

    s === 3 ? this.restartMessage() : this.gameResultMessage(b, s);
  }
  //게임 끝난 직후 재시작/종료 메시지 출력
  async restartMessage() {
    MissionUtils.Console.print(TEXT.THREE_STRKE_MESSAGE);
    const restartOrExit = await MissionUtils.Console.readLineAsync(
      TEXT.RESTART_OR_EXIT
    );
    if (restartOrExit === RESTART.YES) {
      this.play();
      return;
    } else if (restartOrExit === RESTART.NO) {
      return;
    } else {
      throw new Error(ERROR.INVALID_OPTION_ERROR);
    }
  }
}

const app = new App();
app.play();

export default App;
