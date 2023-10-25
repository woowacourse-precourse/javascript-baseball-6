import GameManager from "./GameManager.js";

class App {
  async play() {
    const gameManager = new GameManager();

    await gameManager.gamestart();
    gameManager.generateRandomNum();
    await gameManager.insertNum();
    gameManager.baseBall();
  }
}

const app = new App();
app.play();

export default App;
