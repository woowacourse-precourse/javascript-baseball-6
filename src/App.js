import { MissionUtils } from "@woowacourse/mission-utils";

const GREETING = "숫자 야구 게임을 시작합니다.";
const ERROR_USER_NUM = "숫자를 3개만 입력해주세요.";
const ERROR_USER_OVERLAPPING = "숫자가 중복되었어요.";

class App {
  async play() {
    MissionUtils.Console.print(GREETING);
    let userNums = [];
    const computerNum = this.makeComputerNumber();

    MissionUtils.Console.print(computerNum);

    userNumDetermine(computerNum);
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

  userNumDetermine(computerNum) {
    while (1) {
      let userNum =
        MissionUtils.Console.readLineAsync("숫자를 입력해주세요 :").splice(" ");
      if (userNum.length !== 3) {
        MissionUtils.Console.print(ERROR_USER_NUM);
        continue;
      } else {
        if (
          userNum[0] === userNum[1] ||
          userNum[1] === userNum[2] ||
          userNum[2] === userNum[0]
        ) {
          MissionUtils.Console.print(ERROR_USER_OVERLAPPING);
          continue;
        }
      }
    }
  }
}
const app = new App();
app.play();
export default App;
