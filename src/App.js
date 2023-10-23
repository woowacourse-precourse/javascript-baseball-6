import NumberBaseballGame from "./NumberBaseballGame.js";

class App {
  async play() {
    const numberBaseballGame = new NumberBaseballGame();
    await numberBaseballGame.start();
  }
}

const app = new App();
app.play();

export default App;
