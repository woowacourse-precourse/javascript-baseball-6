import BaseballGame from './components/BaseballGame.js';

class App {
  async play() {
    const BASEBALL_GAME = new BaseballGame();
    await BASEBALL_GAME.gameStart();
  }
}

const APP = new App();
APP.play();
export default App;
