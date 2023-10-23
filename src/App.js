import GameProcess from './GameProcess.js';

class App {
  constructor() {
    this.gameProcess = new GameProcess();
  }

  async play() {
    this.gameProcess.initalizeGame();
    await this.gameProcess.progressGame();
    const GAMERESULT = await this.gameProcess.endTheGame();

    if (GAMERESULT === 'Restart') {
      await this.play();
    }
  }
}
export default App;