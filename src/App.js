import Game from './game/gameLogic.js';

class App {
  async play() {
    try {
      const game = new Game(); 
    await game.start();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
