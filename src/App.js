import BaseballGame from './components/BaseballGame.js';

class App {
  async play() {
    const BASEBALL_GAME = new BaseballGame();
    await BASEBALL_GAME.gameStart();
  }
}

export default App;
