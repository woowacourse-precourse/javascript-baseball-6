import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, BASEBALL } from './Constant.js';
import User from './user.js';
import Referee from './Referee.js';

class App {
  constructor() {
    this.user = new User();
    this.referee = new Referee();
    this.start = this.start();
  }

  start() {
    return MissionUtils.Console.print(MESSAGE.GAME_START);
  }

  async play() {
    try {
      const userInput = await this.user.progressInput();
      return this.result(userInput);
    } catch(error) {
      throw error;
    }
  }

  result(userInput) {
    const state = this.referee.scoreResult(userInput);

    if (state === true) {
      MissionUtils.Console.print(MESSAGE.GAME_CLEAR);
      return this.reset();
    }

    MissionUtils.Console.print(state);
    return this.play();
  }

  async reset() {
    try {
      const userInput = await this.user.resetInput();
      if (userInput === BASEBALL.RESET_NUMBER) {
        this.referee = new Referee();
        return this.play();
      }
      if (userInput === BASEBALL.END_NUMBER) return;
    } catch(error) {
      throw error;
    }
  }
}

export default App;