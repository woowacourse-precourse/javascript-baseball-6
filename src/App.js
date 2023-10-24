import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (userInput.length !== 3) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      const result = this.checkNumbers(userInput.split("").map(Number));
      Console.print(result);

      if (result === "3스트라이크") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const restart = await Console.readLineAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        if (restart === "1") {
          this.computerNumbers = this.generateRandomNumbers();
        } else {
          break;
        }
      }
    }
  }

  checkNumbers(userNumbers) {
    let strikes = 0;
    let balls = 0;
    let result = "";

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === this.computerNumbers[i]) {
        strikes++;
      } else if (this.computerNumbers.includes(userNumbers[i])) {
        balls++;
      }
    }

    if (strikes === 0 && balls === 0) result = "낫싱";
    if (balls > 0) result += `${balls}볼 `;
    if (strikes > 0) result += `${strikes}스트라이크`;
    return result;
  }
}

const app = new App();
app.play();

export default App;
