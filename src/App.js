import Game from "./Game.js";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    const game = new Game();
    await game.reStart();
  }
}

export default App;