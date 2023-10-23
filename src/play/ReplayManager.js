import { Console } from "@woowacourse/mission-utils";
import * as Constants from '../const/Messages';

class ReplayManager {
    async handleReplay() {
      Console.print(Constants.SUGGEST_REPLAY);
      const userChoice = await Console.readLineAsync();
      if (userChoice === '1') {
        return true; // 새로운 게임 시작
      } else if (userChoice === '2') {
        return false; // 게임 종료
      } else {
        Console.print("올바르지 않음");
        return false;
      }
    }
  }

export default ReplayManager;
  