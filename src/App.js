import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = [];
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다");
    while (true) {
      this.getComputerNum();
      while (true) {
        try {
          const input = await Console.readLineAsync("숫자를 입력해주세요: ");
          this.checkUserNum(input);
          if (this.doGame(input)) {
            Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            break;
          }
        } catch (error) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }

      if (!(await this.resetGame())) {
        break;
      }
    }
  }
  getComputerNum() {
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }

  checkUserNum(input) {
    if (!/^\d{3}$/.test(input) || !input.trim()) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
    }
    return input;
  }
  
  doGame(input) {
    const playerNumbers = input.split("").map((char) => parseInt(char));
    const { ball, strike } = this.compareNum(playerNumbers);

    this.printHint(ball, strike);

    return strike === 3;
  }

  compareNum(playerNumbers) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (playerNumbers[i] === this.computerNumbers[i]) {
        strike++;
      } else if (this.computerNumbers.includes(playerNumbers[i])) {
        ball++;
      }
    }
    return { ball, strike };
  }

  printHint(ball, strike) {
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  async resetGame() {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
    );
    return answer === "1";
  }
}

const app = new App();
app.play();

export default App;