import { MissionUtils } from "@woowacourse/mission-utils";
import { rejects } from "assert";
import * as readline from "readline";
// 객체로 작성해보기
class App {
  constructor() {}
  async play() {
    const computerNum = this.computerNum();
    const userNumArray = await this.getUserNum();
    this.determine(userNumArray, computerNum);

    // if (strike == 3) {
    //   console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    //   console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    // }
  }

  computerNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
    console.log(computer);
  }

  async getUserNum() {
    console.log("숫자 야구 게임을 시작합니다.");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const userNumArray = await new Promise((resolve, reject) => {
      rl.question("숫자를 입력해주세요: ", function (userInput) {
        rl.close();
        const userNum = Array.from(userInput).map(Number);
        if (
          isNaN(userInput) ||
          userInput < 0 ||
          userInput.toString().length !== 3
        ) {
          reject(new Error("[ERROR] 숫자가 잘못된 형식입니다."));
        } else {
          resolve(userNum);
        }
      });
    });

    return userNumArray;
  }

  determine(userNum, computerNum) {
    let strike = 0;
    let ball = 0;

    //스트라이크
    for (let i = 0; i < userNum.length; i++) {
      if (computerNum[i] == userNum[i]) {
        strike++;
      }
    }
    //볼
    for (let i = 0; i < computerNum.length; i++) {
      for (let j = 0; j < userNum.length; j++) {
        if (i != j && computerNum[i] == userNum[j]) {
          ball++;
        }
      }
    }
    if (strike == 0) {
      console.log(`${ball} 볼`);
    } else if (ball == 0) {
      console.log(`${strike} 스트라이크`);
    } else if (strike == 0 && ball == 0) {
      console.log("낫싱");
    } else {
      console.log(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

const app = new App();
app.play();

export default App;
