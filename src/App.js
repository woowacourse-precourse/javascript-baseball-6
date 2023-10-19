import BaseballGame from "./BaseballGame";

class App {
  async play() {
    const baseballGame = new BaseballGame();

    while (!is_pass) {
      await baseballGame.inputUserNumber();
      is_pass = baseballGame.inputResult();
    }

    const IS_RETRY = await baseballGame.endGame();
    if (IS_RETRY) this.play();
  }
}

export default App;
