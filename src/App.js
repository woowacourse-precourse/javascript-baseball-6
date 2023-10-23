import { MissionUtils } from '@woowacourse/mission-utils';
import { GameSet } from './Game/game.js';
import { TEXT } from './Constants/constant.js';

class App {
  async play() {
    MissionUtils.Console.print(TEXT.INITIAL);
    await GameSet();
  }
}
const app = new App();
app.play();

export default App;
