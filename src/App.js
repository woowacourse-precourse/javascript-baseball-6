import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = [];
    this.gameOver = false;
  }

  async play() {
    this.computerNumbers = this.generateRandomNumbers();
    this.gameOver = false;

    while (!this.gameOver) {
      const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
      await this.processUserInput(userInput);
    }
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }


  async processUserInput(userInput) {
    if (!/^\d{3}$/.test(userInput)) {
      throw new Error("[ERROR] 올바른 형식의 숫자를 입력해주세요.");
    }
    const userNumbers = userInput.split("").map(Number);
    const result = this.calculateResult(userNumbers);

    if (result.strikes === 3) {
      MissionUtils.Console.print("3스트라이크");
      await this.askForRestart();
    } else if (result.strikes > 0 || result.balls > 0) {
        MissionUtils.Console.print(`${result.balls}볼 ${result.strikes}스트라이크`);
    } else {
        MissionUtils.Console.print("낫싱");
    }
  }

  calculateResult(userNumbers) {
    let strikes = 0;
    let balls = 0;

    userNumbers.forEach((number, index) => {
      if (number === this.computerNumbers[index]) {
        strikes++;
      } else if (this.computerNumbers.includes(number)) {
        balls++;
      }
    });

    return { strikes, balls };
  }

  async askForRestart() {
    const userInput = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ");
    if (userInput === "1") {
      await this.play();
    } else if (userInput === "2") {
        MissionUtils.Console.print("게임 종료");
      this.gameOver = true;
    }
  }
}

export default App;
