import BaseballGame from "./BaseballGame";

class App {
  async play() {
    const baseballGame = new BaseballGame();
    let is_end = false;

    while (!is_end) {
      await baseballGame.inputUserNumber();
      baseballGame.printResult();
      is_end = baseballGame.IsGameEnd();
    }

    const IS_RETRY = await baseballGame.endGame();
    if (IS_RETRY) this.play();
  }
}

export default App;
