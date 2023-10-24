import BaseballGame from './js/baseball-game.js';
import GameStateService from './js/services/game-state.service.js';

class App {
  #gameState;

  constructor() {
    this.#gameState = new GameStateService();
  }

  async play() {
    const baseBallGame = new BaseballGame(this.#gameState);
    await baseBallGame.startGame();
  }
}

export default App;
