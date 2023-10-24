import { getComputer } from './utils/getComputer.js';
import { getPlayer } from './utils/getPlayer.js';
import { getResult } from './utils/getResult.js';
import { printResult } from './utils/printResult.js';
import { restartHandler } from './utils/restartHandler.js';
import { START } from './constants.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let computer = getComputer();

    while (true) {
      const player = await getPlayer();
      const result = getResult(computer, player);

      printResult(result);

      if (result.strike === 3) {
        const isRestarted = await restartHandler();
        if (isRestarted === START) {
          computer = getComputer();
        } else {
          break;
        }
      }
    }
  }
}

export default App;
