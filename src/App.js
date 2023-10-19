import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const computerNumber = this.getComputerRandomNumber();
    let continueGame = true;

    while (continueGame) {
      const number = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (this.validateInput(number)) {
        const { strike, ball } = this.calculateBaseball(computerNumber, number);

        if (ball !== 0 && strike === 0) {
          Console.print(`${ball}볼`);
        } else if (ball === 0 && strike !== 0) {
          Console.print(`${strike}스트라이크`);
        } else if (ball !== 0 && strike !== 0) {
          Console.print(`${ball}볼 ${strike}스트라이크`);
        }
      } else {
        Console.print("종료");
        continueGame = false;
      }
    }
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

  getComputerRandomNumber() {
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
    const numStr = String(number);
    const setNumber = new Set(number);
    return numStr.length !== setNumber.size;
  }
  isPositive(number) {
    if (number > 0) {
      return true;
    }
    return false;
  }
}

export default App;

const app = new App();
app.play();
