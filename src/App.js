import GamePlayer from './classes/GamePlayer';

const gamePlayer = new GamePlayer();

class App {
  async play() {
    await gamePlayer.startGame();
  }
}

export default App;
