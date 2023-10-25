import BaseballGame from './BaseballGame';

class App {
  async play() {
    const baseballGame = new BaseballGame();
    await baseballGame.startGame();
  }
}

export default App;
