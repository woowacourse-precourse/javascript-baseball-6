import ConvertInputTo from './modules/ConvertInputTo.js';
import Run from './modules/Run.js';
import Print from './modules/Print.js';

class App {
  async play() {
    let isPlaying = true;
    Print.playStartMessage();
    while (isPlaying) {
      await Run.baseball();
      isPlaying = await ConvertInputTo.tryAgain();
    }
  }
}

export default App;