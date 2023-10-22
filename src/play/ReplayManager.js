import { Console } from "@woowacourse/mission-utils";
import * as Constants from '../const/Messages';

class ReplayManager {
  async handleReplay(newGame) {
    // Console.print(Constants.GOAL);
    Console.print(Constants.SUGGEST_REPLAY);
    const userChoice = await Console.readLineAsync();

    if (userChoice === '1') {
      return newGame.play(); // 새로운 게임 시작
    } else if (userChoice === '2') {
      Console.print(Constants.GAME_OVER);
      return; // 게임 종료
    }
  }
}

export default ReplayManager;
  