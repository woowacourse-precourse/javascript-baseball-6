import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.GameStart();
  }

  async GameStart() {
    const computerNumber = await this.getComputerRandomNumber();

    let continueGame = true;
    while (continueGame) {
      const number = await Console.readLineAsync("숫자를 입력해주세요 : ");

      if (this.validateInput(number)) {
        const { strike, ball } = this.calculateBaseball(computerNumber, number);
        this.printResult(ball, strike);

        if (strike === 3) {
          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          const userChoice = await Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
          );
          if (userChoice == 1) {
            this.restart();
          }
          continueGame = false;
        }
      } else {
        continueGame = false;
        throw new Error("[ERROR] 3자리 숫자를 입력해주세요.");
      }
    }
  }

  printResult(ball, strike) {
    if (ball !== 0 && strike === 0) {
      Console.print(`${ball}볼`);
    } else if (ball === 0 && strike !== 0) {
      Console.print(`${strike}스트라이크`);
    } else if (ball !== 0 && strike !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    } else {
      Console.print(`낫싱`);
    }
  }

  restart() {
    this.GameStart();
  }

  calculateBaseball(computerNumbers, number) {
    const userNum = Array.from(String(number), Number);
    let score = { strike: 0, ball: 0 };
    userNum.forEach((num, index) => {
      if (num === computerNumbers[index]) {
        score.strike++;
      } else if (computerNumbers.includes(num)) {
        score.ball++;
      }
    });

    return score;
  }

  async getComputerRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  validateInput(number) {
    if (!this.isThreeNumber(number)) {
      return false;
    }
    if (this.isDuplicate(number)) {
      return false;
    }
    if (!this.isPositive(number)) {
      return false;
    }
    return true;
  }
  isThreeNumber(number) {
    const numStr = String(number);
    return numStr.length === 3 && !isNaN(number);
  }
  isDuplicate(number) {
    return new Set(number).size !== 3;
  }
  isPositive(number) {
    return number > 0;
  }
}

export default App;

const app = new App();
app.play();
