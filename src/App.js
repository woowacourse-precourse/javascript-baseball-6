import { Console, MissionUtils } from "@woowacourse/mission-utils";
import readline from "readline";

class App {
  constructor() {
    this.computerNumbers = this.computerNumbers();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.playGame();
  }

  playGame() {
    this.rl.question(`숫자를 입력해주세요: `, (answer) => {
      const playerNumbers = answer.split("").map((number) => parseInt(number));

      const result = this.calculateResult(playerNumbers);

      Console.print(result);
      this.rl.close();
    });
  }

  computerNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  calculateResult(playerNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.computerNumbers[i] === playerNumbers[j]) {
          if (i === j) {
            strike++;
          } else {
            ball++;
          }
        }
      }
    }

    if (strike === 3) {
      return "3개의 숫자를 모두 맞히셨습니다!";
    }
    if (ball === 0 && strike === 0) {
      return "낫싱";
    }
    if (ball === 0) {
      return `${strike}스트라이크`;
    }
    if (strike === 0) {
      return `${ball}볼`;
    }
    return `${ball}볼 ${strike}스트라이크`;
  }
}

const app = new App();

app.play();

export default App;
