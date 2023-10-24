import GamePlayer from './classes/GamePlayer';

class App {
  async play() {
    await GamePlayer.startGame();
  }
}

export default App;
