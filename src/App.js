import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./messages/messages";

class App {
  constructor() {
    this.computerAnswers = [];
  }

  play() {
    Console.print(MESSAGES.GAME_PROCESS.START);

    return this.initPlay();
  }

  async initPlay() {
    this.createComputerAnswers();
    await this.getUserAnswers();
  }

  createComputerAnswers() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computerAnswers = computer;
  }

  async getUserAnswers() {
    const user = await Console.readLineAsync(
      "1~9 숫자 내에서 중복 없이 임의의 숫자 3자리를 입력하세요."
    );
    const userAnswers = user.split("").map(Number);
    if (userAnswers.length !== 3 || userAnswers.some(isNaN)) {
      throw new Error(MESSAGES.GAME_ERROR.LENGTH_VALID);
    } else {
      this.playBaseBall(userAnswers);
    }
  }

  playBaseBall(userAnswers) {
    let strike = 0;
    let ball = 0;

    this.computerAnswers.forEach((computer, idx) => {
      if (computer === userAnswers[idx]) {
        strike += 1;
        return;
      }
      if (userAnswers.includes(computer)) {
        ball += 1;
        return;
      }
    });
    this.resultBaseBall(ball, strike);
  }

  resultBaseBall(ball, strike) {
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print(MESSAGES.GAME_PROCESS.END);
      this.resetBaseBall();
    } else {
      if (strike === 0 && ball === 0) {
        Console.print("낫싱");
      } else if (strike === 0 && ball !== 0) {
        Console.print(`${ball}볼`);
      } else if (strike !== 0 && ball === 0) {
        Console.print(`${strike}스트라이크`);
      } else {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      }
      this.getUserAnswers();
    }
  }

  async resetBaseBall() {
    const RESET = await Console.readLineAsync(MESSAGES.GAME_PROCESS.RESTART);
    if (RESET === "1") this.initPlay();
    if (RESET === "2") {
      Console.print(MESSAGES.GAME_PROCESS.EXIT);
    }
  }
  return;
}

const app = new App();
app.play();

export default App;
