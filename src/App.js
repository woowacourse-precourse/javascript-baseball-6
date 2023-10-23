import NumberBaseballGame from "./NumberBaseballGame.js";

class App {
  async play() {
    const numberBaseballGame = new NumberBaseballGame();
    await numberBaseballGame.start();
  }
}

// const app = new App(); // 개발용
// app.play(); // 개발용

export default App;
