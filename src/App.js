import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    const userGuess = await this.getUserGuess();
    this.computerNumber();
    console.log("사용자 입력:", userGuess);
  }

  computerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    console.log("컴퓨터 숫자", computer);
  }

  async getUserGuess() {
    let guess;
    do {
      guess = await MissionUtils.Console.readLineAsync(
        "1부터 9까지의 숫자 중 서로 다른 숫자 3개를 입력하세요: "
      );
    } while (!this.isValidInput(guess));

    return guess.split("").map(Number);
  }

  isValidInput(input) {
    if (input.length !== 3) {
      console.log("3개의 숫자를 입력하세요.");
      return false;
    }

    const numbers = input.split("").map(Number);

    if (
      numbers.some((num) => isNaN(num) || num < 1 || num > 9) ||
      new Set(numbers).size < 3
    ) {
      console.log("잘못된 입력입니다. 다시 입력하세요.");
      return false;
    }

    return true;
  }
}

const app = new App();
app.play();
