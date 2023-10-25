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
    const guess = [];
    while (guess.length < 3) {
      const input = await MissionUtils.Console.readLineAsync(
        "1부터 9까지의 숫자 중 서로 다른 숫자 3개를 입력하세요: "
      );
      const number = parseInt(input, 10);
      if (isNaN(number) || number < 1 || number > 9 || guess.includes(number)) {
        console.log("잘못된 입력입니다. 다시 입력하세요.");
      } else {
        guess.push(number);
      }
    }
    return guess;
  }
}

const app = new App();
app.play();
