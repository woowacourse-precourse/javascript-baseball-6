import playBaseball from "./game/gamePlay.js";

class App {
  async play() {
    playBaseball();
  }
}

const app = new App();
app.play();

export default App;
