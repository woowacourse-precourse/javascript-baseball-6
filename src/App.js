import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./BaseballGame";
import { MESSAGE } from "./Constant";

class App {
  constructor() {
    this.BaseballGame = new BaseballGame();
  }

  //시작 메시지 출력과 게임시작
  async play() {
    Console.print(MESSAGE.START);
    await this.start();
  }

  async start() {
    this.BaseballGame.start();
    await this.readAnswer();
  }

  async readAnswer() {
    const answer = await Console.readLineAsync(MESSAGE.INPUT);
    BaseballGame.validNumber(answer);
    await this.printAnswer(answer);
  }

  getAnswerMessage(ball, strike) {
    if (ball == 0 && strike == 0) return MESSAGE.NOTHING;
    return `${ball > 0 ? ball + MESSAGE.BALL + " " : ""}${
      strike > 0 ? strike + MESSAGE.STRIKE : ""
    }`.trim();
  }

  async printAnswer(answer) {
    const { ball, strike } = this.BaseballGame.getAnswer(answer);
    Console.print(this.getAnswerMessage(ball, strike));
    if (strike == 3) {
      Console.print(MESSAGE.SUCCESS);
      await this.readRetry();
      return;
    }
    await this.readAnswer();
  }

  // 게임 재시작 여부
  async readRetry() {
    const answer = await Console.readLineAsync(MESSAGE.RETRY);
    if (answer == 1) {
      this.start();
      return;
    }
    if (answer != 2) {
      throw new Error(MESSAGE.INVALID_RETRY_ANSWER);
    }
  }
}

export default App;
