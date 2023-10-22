import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./messages/messages";

class App {
  constructor() {
    this.computerAnswers = [];
    this.userAnswers;
    this.message;
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

    if (userAnswers.length !== 3)
      throw new Error(MESSAGES.GAME_ERROR.LENGTH_VALID);

    const CORRECT_USER_NUMBERS_IN_RANGE = (userAnswer) =>
      1 <= userAnswer && userAnswer < 10;
    if (!userAnswers.every(CORRECT_USER_NUMBERS_IN_RANGE))
      throw new Error(MESSAGES.GAME_ERROR.RANGE_VALID);

    const DUPLICATE_USER_NUMBERS_IN_ARRAY = [...new Set(userAnswers)];
    if (DUPLICATE_USER_NUMBERS_IN_ARRAY.length !== user.length)
      throw new Error(MESSAGES.GAME_ERROR.DUPLICATE_VALID);

    this.userAnswers = userAnswers;
  }

  async play() {
    Console.print(MESSAGES.GAME_PROCESS.START);
    this.createComputerAnswers();
    await this.getUserAnswers();
  }
}

const app = new App();
app.play();

export default App;
