import BaseballGame from './BaseballGame.js';

class App {
  async play() {
    const baseballGame = new BaseballGame();
    await baseballGame.play();
  }
}

export default App;
