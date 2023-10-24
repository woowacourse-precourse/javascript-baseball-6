import { Console } from "@woowacourse/mission-utils";
import * as Constants from '../const/Messages';

class ReplayManager {
  async handleReplay() {
    Console.print(Constants.SUGGEST_REPLAY);
    const userChoice = await Console.readLineAsync();
    switch (userChoice) {
      case '1':
        return 'ready';
      case '2':
        return 'end';
      default:
        return 'end';
    }
  }
}

export default ReplayManager;
  