import { MissionUtils } from '@woowacourse/mission-utils';
import User from './user.js';
import Referee from './Referee.js';

class App {
  constructor() {
    this.user = new User();
    this.referee = new Referee();
  }

  async play() {
    try {
      const userInput = await this.user.progressInput();
      this.gameState(userInput);
    } catch(error) {
      throw error;
    }
  }

  gameState(userInput) {
    const state = this.referee.scoreResult(userInput);

    if (state === true) {
      MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return this.reset();
    }

    MissionUtils.Console.print(state);
    return this.play();
  }

  async reset() {
    try {
      const userInput = await this.user.resetInput();
      if (userInput === '1') {
        this.referee = new Referee();
        return this.play();
      }
    } catch(error) {
      throw error;
    }
  }
}

export default App;

const app = new App();
app.play();