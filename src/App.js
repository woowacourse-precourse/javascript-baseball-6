import { MissionUtils } from '@woowacourse/mission-utils';
import { init } from './GameCode/game.js';
import { START_MESSAGE } from './Text/message.js';

class App {
  async play() {
    MissionUtils.Console.print(START_MESSAGE.initial);
    await init();
  }
}
const app = new App();
app.play();

export default App;
