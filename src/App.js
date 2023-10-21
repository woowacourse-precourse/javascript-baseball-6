import Filter from './module/Filter.js';
import Board from './module/Board.js';
import Calculate from './module/Calculate.js';
import Print from './module/Print.js';

class App {
  async play() {
    let isPlaying = true;
    Print.playStartMessage();
    while (isPlaying) {
      const computerList = Calculate.randomList();
      await Board.run(computerList);
      isPlaying = await Filter.retry();
    }
  }
}

export default App;