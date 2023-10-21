import MissionUtils from "@woowacourse/mission-utils";
import Messages from "./common/messages.js";

class BaseballGame {
  constructor() {}

  // 게임 시작하기
  async startGame() {
    MissionUtils.Console.print(Messages.START_MESSAGE);
  }
}

export default BaseballGame;
