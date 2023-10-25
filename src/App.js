import Baseball from "./Baseball.js";

class App {
  async play() {
    const game = new Baseball();
    await game.init();
  }
}

const app = new App();
app.play();

export default App;
