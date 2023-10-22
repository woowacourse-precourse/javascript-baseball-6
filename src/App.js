import BaseballGame from "./BaseballGame.js";

class App {
  async play() {
    console.log("숫자 야구 게임을 시작합니다.");

    const baseballGame = new BaseballGame();

    try {
      await baseballGame.playGame();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
