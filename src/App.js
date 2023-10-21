import Pipe from './Pipe.js';
import Board from './Board.js';
import Calculate from './Calculate.js';
import Print from './Print.js';

class App {
  async play() {
    let isPlaying = true;
    Print.printPlayStartMessage();
    while (isPlaying) {
      const computerList = Calculate.getRandomList();
      await Board.run(computerList);
      isPlaying = await Pipe.retryPipe();
    }
  }
}

export default App;