import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = this.generateComputerNumbers();
    this.attempts = 0;
  }

  generateComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");
      if (!this.isValidInput(userInput)) {
        MissionUtils.Console.print("올바른 숫자를 입력해주세요.");
        continue;
      }

      this.attempts++;
      const result = this.calculateResult(userInput);
      MissionUtils.Console.print(result);

      if (result === "3스트라이크") {
        MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        const restartChoice = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ");
        if (restartChoice.trim() === '1') {
          this.computerNumbers = this.generateComputerNumbers();
          this.attempts = 0;
          MissionUtils.Console.print("게임을 다시 시작합니다.");
        } else {
          MissionUtils.Console.print("게임을 종료합니다.");
          break;
        }
      }
    }
  }

  isValidInput(input) {
    return /^[1-9]{3}$/.test(input);
  }

  calculateResult(userInput) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userInput[i] === this.computerNumbers[i]) {
        strikes++;
      } else if (this.computerNumbers.includes(userInput[i])) {
        balls++;
      }
    }

    if (strikes === 3) {
      return "3스트라이크";
    } else if (strikes > 0 || balls > 0) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else {
      return "낫싱";
    }
  }
}

const app = new App();
app.play();
