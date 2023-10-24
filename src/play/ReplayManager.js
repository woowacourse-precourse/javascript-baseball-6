import { Console } from "@woowacourse/mission-utils";
import * as Constants from '../const/Messages';

class ReplayManager {
  async handleReplay() {
    Console.print(Constants.SUGGEST_REPLAY);
    const userChoice = await Console.readLineAsync();
    switch (userChoice) {
      case '1':
        return 'ready'; // 새로운 게임 시작
      case '2':
        return 'ended'; // 게임 종료
      default:
        Console.print("올바르지 않은 입력입니다. 게임을 종료합니다.");
        return 'ended';
    }
  }
}

export default ReplayManager;
  