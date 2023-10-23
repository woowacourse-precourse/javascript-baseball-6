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
  }
}

const app = new App();
app.play();

export default App;
