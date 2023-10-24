import GameManager from "./GameManager";

class App {
  async play() {
    const gameManager = new GameManager();
    gameManager.gamestart();
    gameManager.generateRandomNum();
  }
}

export default App;
