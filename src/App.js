import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const computerNumber = this.getRandomNumber();
    MissionUtils.Console.print("숫자 야구를 시작합니다.");
    const userNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    this.getBaseballResult(userNumber, computerNumber);
  }

  async getBaseballResult(userNumber, computerNumber) {
    const inputIntArray = Array.from(userNumber).map((data) => parseInt(data));

    let strike = 0;
    let ball = 0;
    let nothing = 0;

    for (let i = 0; i < 3; i++) {
      if (inputIntArray[i] === computerNumber[i]) {
        strike += 1;
      } else if (computerNumber.includes(inputIntArray[i])) {
        ball += 1;
      }
    }

    if (strike === 0 && ball === 0) nothing = 1;

    MissionUtils.Console.print(`숫자 야구 결과 : ${strike} ${ball} ${nothing}`);
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
