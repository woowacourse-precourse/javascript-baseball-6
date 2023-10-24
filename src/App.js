import { MissionUtils } from "@woowacourse/mission-utils";
import { resolve } from "path";
import * as readline from "readline";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  async play() {
    await this.startNewGame();
  }

  async startNewGame() {
    console.log("숫자 야구 게임을 시작합니다.");
    const computerNum = this.computerNum();
    let gameFinished = false;

    while (!gameFinished) {
      const userNumArray = await this.getUserNum();
      if (userNumArray) {
        const result = this.determine(userNumArray, computerNum);
        if (result == 3) {
          gameFinished = true;
          await this.askToPlayAgain();
        }
      }
    }
  }

  computerNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
      // console.log(computer);
    }
    return computer;
  }

  async getUserNum() {
    return new Promise((resolve, reject) => {
      this.rl.question("숫자를 입력해주세요 : ", function (userInput) {
        const userNum = Array.from(userInput).map(Number);
        if (
          isNaN(userInput) ||
          userInput < 0 ||
          userInput.toString().length !== 3
        ) {
          console.log("[ERRER] 숫자가 잘못된 형식입니다. 다시 시도하세요");
          resolve(undefined);
        } else {
          resolve(userNum);
        }
      });
    });
  }

  determine(userNum, computerNum) {
    let strike = 0;
    let ball = 0;

    //스트라이크
    for (let i = 0; i < userNum.length; i++) {
      if (computerNum[i] == userNum[i]) {
        strike++;
      } else if (computerNum.includes(userNum[i])) {
        ball++;
      }
    }

    if (strike > 0 || ball > 0) {
      console.log(
        strike > 0 && ball > 0
          ? `${ball}볼 ${strike}스트라이크`
          : strike > 0
          ? `${strike}스트라이크`
          : `${ball}볼`
      );
    } else {
      console.log("낫싱");
    }
    if (strike == 3) {
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return 3;
    }
  }
  async askToPlayAgain() {
    const response = await new Promise((resolve) => {
      this.rl.question(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        resolve
      );
    });
    if (response === "1") {
      this.startNewGame();
    } else if (response === "2") {
      console.log("게임을 종료합니다.");
      this.rl.close();
    } else {
      console.log("유효하지 않은 입력입니다. 게임을 종료합니다.");
      this.rl.close();
    }
  }
}

const app = new App();
app.play();

export default App;
