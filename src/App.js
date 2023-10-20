import startGame from "./startGame.js";
class App {
  async play() {
    startGame();
  }
}

const app = new App();
app.play();

export default App;
