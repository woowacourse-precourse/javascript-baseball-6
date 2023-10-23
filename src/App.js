import GameController from '../controller/GameController.js'

class App {
  gameController = new GameController();
  async play() {
    this.gameController.startGame();
  }
}

export default App;

const app = new App();
app.play();