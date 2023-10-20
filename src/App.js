import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구를 시작합니다.");
    while (true) {
      const computerNumber = this.getRandomNumber();
      const userNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      const result = await this.getBaseballResult(userNumber, computerNumber);
    }
  }

  async getBaseballResult(userNumber, computerNumber) {
    const inputIntArray = Array.from(userNumber).map((data) => parseInt(data));

    let strike = 0;
    let ball = 0;
    let nothing = false;

    for (let i = 0; i < 3; i++) {
      if (inputIntArray[i] === computerNumber[i]) {
        strike += 1;
      } else if (computerNumber.includes(inputIntArray[i])) {
        ball += 1;
      }
    }
    if (strike === 0 && ball === 0) nothing = true;

    const strikeMessage = strike ? `${strike}스트라이크` : "";
    const ballMessage = ball ? `${ball}볼` : "";
    const nothingMessage = "낫싱";

    if (nothing) MissionUtils.Console.print(nothingMessage);

    if (strike === 3) {
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      return 1;
    } else if (strike !== 3) {
      MissionUtils.Console.print(`${ballMessage}${strikeMessage}`);
      return 0;
    }
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const app = new App();
app.play();

export default App;
