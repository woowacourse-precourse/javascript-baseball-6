import BaseballGame from "./BaseballGame";

class App {
  async play() {
    const baseballGame = new BaseballGame();

    await baseballGame.inputUserNumber();
  }
}

export default App;
