import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.resetGame();
    this.maxTries = 10;
    this.tries = 0;
  }

  generateComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  resetGame() {
    this.strike = 0;
    this.ball = 0;
    this.computer = this.generateComputerNumber();
  }

  async getInput() {
    return await MissionUtils.Console.readLineAsync("숫자 야구 게임을 시작합니다.");
  }

  async askRestartOption() {
    return await MissionUtils.Console.readLineAsync("3스트라이크! 게임을 다시 시작하시려면 1, 종료하시려면 2를 입력하세요.");
  }

  evaluateGuess(inputArray) {
    this.strike = 0;
    this.ball = 0;

    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (this.computer[j] === parseInt(inputArray[k], 10)) {
          j === k ? this.strike++ : this.ball++;
          break;
        }
      }
    }
  }

  async play() {
    while (this.tries < this.maxTries) {
      this.tries++;
      const input = await this.getInput();
      
      if (!input) {
        throw new Error("[ERROR]");
      }

      const inputArray = input.split('');

      if (inputArray.length !== 3) {
        throw new Error("[ERROR]");
      }

      this.evaluateGuess(inputArray);

      if (this.strike === 3) {
        MissionUtils.Console.print("3스트라이크");
        const restartOption = await this.askRestartOption();
        if (restartOption === "1") {
          this.resetGame();
          this.tries = 0;
          continue;
        } else if (restartOption === "2") {
          MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          break;
        }
      } else if (this.strike >= 1 || this.ball >= 1) {
        MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
      } else {
        MissionUtils.Console.print("낫싱");
      }
    }
  }
}

export default App;