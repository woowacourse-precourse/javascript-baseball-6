import GamePlayer from './classes/gamePlayer';

class App {
  async play() {
    await GamePlayer.startGame();
  }
}

export default App;
