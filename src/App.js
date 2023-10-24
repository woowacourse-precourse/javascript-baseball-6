import BaseBallGame from './BaseBallGame';

class App {
  async play() {
    this.replay = true;
    const baseBallGame = new BaseBallGame();
    while (this.replay) {
      baseBallGame.reset();
      await baseBallGame.begin();
      this.replay = await baseBallGame.askUserForReplay();
    }
  }
}

export default App;
