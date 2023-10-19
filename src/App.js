import { MissionUtils } from "@woowacourse/mission-utils";

const GREETING = "숫자 야구 게임을 시작합니다.";
const SUCCESS = "3개의 숫자를 모두 맞히셨습니다 ! 게임 종료";
const ERROR = "[ERROR]";

class App {
  async play() {
    MissionUtils.Console.print(GREETING);
    let computerNum = await this.makeComputerNumber();
    while (1) {
      let userNums = await this.getUserNum();
      const result = await this.compareUserAndComputer(userNums, computerNum);
      {
        result[0] === 0 &&
          result[1] === 0 &&
          MissionUtils.Console.print("낫싱");
      }
      MissionUtils.Console.print(
        `${result[1] !== 0 && result[1] + "볼"} ${
          result[0] !== 0 && result[0] + "스트라이크"
        }`
      );
      if (result[0] === 3) {
        MissionUtils.Console.print(SUCCESS);
        const reStart = await MissionUtils.Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : "
        );
        if (reStart === "1") {
          computerNum = await this.makeComputerNumber();
          continue;
        } else if (reStart === "2") {
          return;
        }
      }
    }
  }

  makeComputerNumber() {
    let computer = [];
    while (computer.length < 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  async getUserNum() {
    while (1) {
      let data = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요 : "
      );
      const userNum = data?.split("").map(Number);
      if (userNum.length !== 3) {
        throw new Error(ERROR);
      } else if (
        userNum[0] === userNum[1] ||
        userNum[1] === userNum[2] ||
        userNum[2] === userNum[0]
      ) {
        {
          throw new Error(ERROR);
        }
      } else {
        return userNum;
      }
    }
  }
  async compareUserAndComputer(userNums, computerNum) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (userNums.includes(computerNum[i])) {
        if (userNums[i] === computerNum[i]) {
          strike++;
        } else {
          ball++;
        }
      }
    }
    return [strike, ball];
  }
}
const app = new App();
app.play();
export default App;
