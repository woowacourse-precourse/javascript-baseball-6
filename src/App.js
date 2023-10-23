import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = [];
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    await this.playNumberGame();
  }

  async playNumberGame() {
    this.generateRandomNumber();
    let printResult;
    while (printResult !== "3스트라이크") {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해 주세요 : "
      );
      if (userInput.length !== 3) {
        throw new Error("[ERROR] 3자리 숫자만 입력하세요");
      }

      if (Number.isNaN(Number(userInput))) {
        throw new Error("[ERROR] 숫자만 입력하세요");
      }

      if (new Set(userInput).size !== 3) {
        throw new Error("[ERROR] 중복된 숫자가 입력되었습니다.");
      }
      printResult = this.numberBaseballResult(userInput);
      MissionUtils.Console.print(printResult);
    }
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    await this.restartInput();
  }

  generateRandomNumber() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
      console.log(this.computer);
    }
  }

  numberBaseballResult(userInput) {
    const NumberArr = userInput.split("").map(Number);
    let balls = 0;
    let strikes = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (NumberArr[i] === this.computer[j]) {
          if (i === j) {
            strikes++;
          } else {
            balls++;
          }
        }
      }
    }
    if (strikes === 0 && balls === 0) {
      return "낫싱";
    } else if (strikes !== 0 && balls === 0) {
      return strikes + "스트라이크";
    } else if (strikes === 0 && balls !== 0) {
      return balls + "볼";
    } else {
      return balls + "볼 " + strikes + "스트라이크 ";
    }
  }

  async restartInput() {
    const restart = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    if (restart === "1") {
      await this.playNumberGame();
    }
  }
}

export default App;

const app = new App();
app.play();
