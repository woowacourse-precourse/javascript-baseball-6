import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_TEXT } from "../Message";

class GameView {
  // 게임의 시작멘트를 출력
  async displayGameStart() {
    await MissionUtils.Console.print(GAME_TEXT.START);
  }

  // 사용자의 입력갑 출력
  async displayUserInput(userInput) {
    await MissionUtils.Console.print(GAME_TEXT.USERINPUT + userInput.join(""));
  }

  // 게임 결과 출력
  async displayGameMessage(message) {
    await MissionUtils.Console.print(message);
  }
}

export default GameView;
