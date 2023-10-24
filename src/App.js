import BaseballGame from './BaseballGame.js';
import {MissionUtils} from '@woowacourse/mission-utils';
import { LOG } from './util/constants.js';

class App {

  state = false; //게임 진행 상태

  async play() {
    this.state = true;
    const game = new BaseballGame();
    MissionUtils.Console.print(LOG.START);

    while (this.state) {
      game.init();
      await game.start(this.state);
      this.state = await game.selectAction();
    }
  }

}

export default App;
