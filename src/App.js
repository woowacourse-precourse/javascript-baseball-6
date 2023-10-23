import { MissionUtils } from "@woowacourse/mission-utils";
import { playGame } from './baseball.js';

class App {
  async play() {
    await playGame();
  }
}

export default App;
