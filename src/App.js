import {
  Print,
  Run,
  ConvertInputTo
} from './modules/AppModules.js';

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

new App.play();
export default App;