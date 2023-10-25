import { MissionUtils } from '@woowacourse/mission-utils';
import { init } from './GameCode/game.js';
import { START_MESSAGE } from './Text/message.js';

class App {
  async play() {
    await init();
  }
}
export default App;
