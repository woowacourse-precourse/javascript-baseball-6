import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../src/constants/messages.js';

class App {
  async play() {
    Console.print(MESSAGE.GAME.INPUT);
    console.log(MESSAGE.GAME.END);
  }
}

const game = new App();
game.play();

export default App;
