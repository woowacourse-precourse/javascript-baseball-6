import BaseballGame from "./BaseballGame";

class App {
  async play() {
    const baseballGame = new BaseballGame();
    let isEnd = false;

    while (!is_end) {
      await baseballGame.inputUserNumber();
      baseballGame.printResult();
      isEnd = baseballGame.IsGameEnd();
    }

    const IS_RETRY = await baseballGame.endGame();
    if (IS_RETRY) this.play();
  }
}

export default App;
