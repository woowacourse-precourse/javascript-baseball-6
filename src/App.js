import game from './game.js';
class App {
  async play() {
    game();
  }
}

export default App;

const app = new App();
app.play();
