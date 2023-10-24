import BaseballGame from "./controller/BaseballGame";

class App {
  async play() {
    const baseball = new BaseballGame();
    await baseball.start();
  }
}

// const app = new App();
// app.play();
export default App;