import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./BaseballGame";

class App {
  constructor() {
    this.BaseballGame = new BaseballGame();
  }

  //시작 메시지 출력과 게임시작
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.start();
  }

  async readAnswer() {
    let answer = await Console.readLineAsync("숫자를 입력해주세요: ");
    BaseballGame.validNumber(answer);
    await this.printAnswer(answer);
  }

  getAnswerMessage(ball, strike) {
    if (ball == 0 && strike == 0) return "낫싱";
    return `${ball > 0 ? ball + "볼" + " " : ""}${
      strike > 0 ? strike + "스트라이크" + " " : ""
    }`.trim();
  }

  async printAnswer(answer) {
    const { ball, strike } = this.BaseballGame.getAnswer(answer);
    Console.print(this.getAnswerMessage(ball, strike));
    if (strike == 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      await this.readRetry();
      return;
    }
    await this.readAnswer();
  }

  // 게임 재시작 여부
  async readRetry() {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
    );
    if (answer == 1) {
      this.start();
      return;
    }
    if (answer != 2) {
      throw new Error("[ERROR] 1또는 2만 입력해 주세요.");
    }
  }
}

export default App;
