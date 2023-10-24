import Game from "./controller/Game.js";

class App {
  async play() {
    const game = new Game();
    await game.startGame();
  }
}

// jest 실행시 비동기 종료되지않는 에러 발생
const app = new App();
app.play();

export default App;
