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
      Console.print(playerNumbers)
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

}

const app = new App();

app.play();

export default App;
