import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_TEXT } from "../Message";

class GameView {
  // 게임 시작 멘트 표시
  async displayGameStart() {
    await MissionUtils.Console.print(GAME_TEXT.START);
  }

  // 유저가 입력한 값 표시
  async displayUserInput(userInput) {
    await MissionUtils.Console.print(GAME_TEXT.USERINPUT + userInput.join(""));
  }

  // 결과 출력
  async displayGameMessage(message) {
    await MissionUtils.Console.print(message);
  }
}

export default GameView;
