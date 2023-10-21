import BaseBallGame from "./model/BaseBallGame.js";

class App {
  async play() {
    // 새로운 게임 만들기
    const baseBallGame = new BaseBallGame();
    // 게임 시작
    await baseBallGame.start();
  }
}

export default App;
