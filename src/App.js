import { MissionUtils } from '@woowacourse/mission-utils';
import startGame from './startup.js';
import Computer from './Computer.js';

class App {
  async play() {
    startGame();
    const computer = Computer.getComputer();
    MissionUtils.Console.print(computer);
  }
}

export default App;
