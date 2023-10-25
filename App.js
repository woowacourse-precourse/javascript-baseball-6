import BaseballGame from './BaseballGame';

class App {
  play() {
    const game = new BaseballGame();
    game.start();
  }
}

export default App;
