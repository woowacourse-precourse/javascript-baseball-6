import GameManager from "./GameManager.js";

class App {
  constructor() {
    this.gameManager = new GameManager();
  }

  async play() {
    await this.gameManager.gameStart();

    let restart = true;

    while (restart) {
      this.gameManager.restartGame();
      await this.gameManager.insertNum();
      await this.gameManager.baseBall();
      restart = await this.gameManager.isContinue();
    }

    console.log("게임 종료");
  }
}

const app = new App();
app.play();

export default App;
