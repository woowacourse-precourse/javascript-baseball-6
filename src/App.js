import BaseballGame from "./BaseballGame.js";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    const baseballGame = new BaseballGame();

    await baseballGame.playGame();
  }
}

export default App;
