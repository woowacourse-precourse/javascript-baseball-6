import baseballGame from "./baseballGame.js";
class App {
  async play() {
    baseballGame();
  }
}

const app = new App();
app.play();

export default App;
