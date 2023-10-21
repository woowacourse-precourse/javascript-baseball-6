import { Console } from "@woowacourse/mission-utils";
import Messages from "./common/messages.js";

class BaseballGame {
  constructor() {}

  // 게임 시작하기
  async startGame() {
    Console.print(Messages.START_MESSAGE);
    this.getUserInputNumbers();
  }

  // 숫자 입력 받기
  async getUserInputNumbers() {
    let input = await Console.readLineAsync(Messages.ENTER_MESSAGE);
    input = input.trim();
  }
}

export default BaseballGame;
