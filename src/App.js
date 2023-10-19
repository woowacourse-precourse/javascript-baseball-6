import BaseballGame from "./BaseballGame";

class App {
  async play() {
    const baseballGame = new BaseballGame();

    while (!is_pass) {
      await baseballGame.inputUserNumber();

      is_pass = baseballGame.inputResult();
    }

    baseballGame.endGame();
  }
}

export default App;
