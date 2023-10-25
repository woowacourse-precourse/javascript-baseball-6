import GameManager from "./GameManager.js";

class App {
  constructor() {
    this.gameManager = new GameManager();
  }

  async play() {
    await this.gameManager.gameStart();
    await this.gameManager.baseBall();
    await this.gameManager.isContinue();

    console.log("게임 종료");
  }
}

const app = new App();
app.play();

export default App;
