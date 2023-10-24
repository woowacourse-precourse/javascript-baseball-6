import PlayBaseballGame from './PlayBaseball.js';

class App {
  async play() {
    const game = new PlayBaseballGame();
    await game.start();
  }
}

export default App;
