import { Console, Random } from "@woowacourse/mission-utils";

class Game {
  constructor() {
    this.computerNumbers = this.generateComputerNumbers();
  }

  generateComputerNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  async startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");

    while (true) {
      const userNumbers = await this.getUserInput();
      const result = this.calculateResult(userNumbers);
      Console.print(result);

      if (result === "3스트라이크") {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        return;
      }
    }
  }

  async getUserInput() {
    try {
      const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const userNumbers = input.split("").map(Number);
      if (userNumbers.length !== 3 || !userNumbers.every(num => num >= 1 && num <= 9)) {
        throw new Error("[ERROR] 입력이 올바르지 않습니다. 1부터 9까지의 서로 다른 3자리 수를 입력해주세요.");
      }
      return userNumbers;
    } catch (error) {
      throw new Error("[ERROR] " + error.message);
    }
  }
  

  calculateResult(userNumbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
      if (userNumbers[i] === this.computerNumbers[i]) {
        strikes++;
      } else if (this.computerNumbers.includes(userNumbers[i])) {
        balls++;
      }
    }

    if (strikes > 0 && balls > 0) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else if (balls > 0) {
      return `${balls}볼`;
    } else if (strikes > 0) {
      return `${strikes}스트라이크`;
    } else {
      return "낫싱";
    }
  }
}

export default Game;
