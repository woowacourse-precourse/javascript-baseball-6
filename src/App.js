import { Message } from './Message';
import randomNum from './RandomNum';

const MissionUtils = require('@woowacourse/mission-utils');
const {Console, Random} = MissionUtils

class App {
  async play() {
    Console.print(Message.START)
    randomNum()
  }
}

export default App;
