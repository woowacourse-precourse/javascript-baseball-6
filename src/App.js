import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGES } from './Constant.js';
import { Numbers } from './Numbers.js';


class App {
  constructor() {
    this.answer = new Numbers();
    this.isFinished = false;
    MissionUtils.Console.print(MESSAGES.GAME_START);
  }

  async play() {}
}

export default App;
