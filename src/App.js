import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumbers = [];
    this.userInput = "";
  }

  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    this.generateRandomNumbers();
    this.getUserInput();
  }

  generateRandomNumbers() {
    while (this.randomNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "서로 다른 3자리의 숫자를 입력해주세요 : "
    );
    this.userInput = userInput;
  }
}

export default App;

const app = new App();
app.play();
