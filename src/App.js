import { MissionUtils } from "@woowacourse/mission-utils";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class App {
  _randomNumber = [];
  _usersNumber = [];

  constructor() {
    console.log("숫자 야구 게임을 시작합니다.");
    this._randomNumber = this.generateRandomNumber();
  }

  async initGame() {
    while (true) {
      const userInput = await MissionUtils.Console.readLineAsync(
        "숫자를 입력해주세요: "
      );

      this.validateUserInput(userInput);
    }
  }

  generateRandomNumber() {
    const randomNumber = [];

    while (randomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!randomNumber.includes(number)) {
        randomNumber.push(number);
      }
    }

    return randomNumber;
  }

  validateUserInput(number) {
    let isCorrectAnswer;

    // input 검증

    if (isCorrectAnswer) {
      this.checkContinueOrExit();
    } else {
      this.initGame();
    }
  }

  async checkContinueOrExit() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (userInput === "1") {
      this.checkContinueGame();
    }

    if (userInput === "2") {
      this.checkExitGame();
    }
  }

  checkContinueGame() {
    this.initGame();
  }

  checkExitGame() {
    // 게임 종료
  }

  async play() {
    this.initGame();
  }
}

const app = new App();
app.play();

export default App;
