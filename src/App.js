import { Console, MissionUtils } from "@woowacourse/mission-utils";
import target from './getComputerNum.js';

class App {
  async play() {
    Console.print(target);
  }
}

export default App;