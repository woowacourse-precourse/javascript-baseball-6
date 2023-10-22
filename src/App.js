import { Console } from "@woowacourse/mission-utils";

import Computer from "./Computer.js";
import Player from "./Player.js";
import Message from "./Message.js";
import Score from "./Score.js";

class App {
  async play() {
    const computer = new Computer();
    const player = new Player();
    const score = new Score();

    Console.print("숫자 야구 게임을 시작합니다.");

    while (!score.isThreeStrike()) {
      player.number = await Console.readLineAsync("숫자를 입력해주세요 : ");
      score.compareNumber(computer.number, player.number);
      score.print();
    }

    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    score.init();

    if (await this.rePlay()) {
      this.play();
    }
  }

  /* 게임 재시작 여부를 반환한다. */
  async rePlay() {
    const answer = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    Message.logIf(answer !== "1" && answer !== "2", "1 또는 2를 입력해주세요.");

    if (answer === "1") return true;
    return false;
  }
}

export default App;
