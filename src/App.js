import Game from './components/Game.js';

class App {
  async play() {
    const GAME = new Game();
    GAME.start();
  }
}

// 테스트
const APP = new App();
APP.play();

export default App;
