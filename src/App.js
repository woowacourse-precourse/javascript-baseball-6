import Pipe from './Pipe';
import Board from './Board';
import Calculate from './Calculate';
import Print from './Print';

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