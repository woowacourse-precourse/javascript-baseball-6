import BaseballGame from "./BaseballGame";

class App {
  async play() {
    const baseballGame = new BaseballGame();

    await this.startPlay(baseballGame);
  }

  async startPlay(game) {
    game.startGame();

    await this.startUser(game);

    const IS_RETRY = await game.endGame();
    if (IS_RETRY) await this.startPlay(game);
  }

  async startUser(game) {
    await game.startUserInput();
    const IS_REINPUT = game.startUserResult();
    if (IS_REINPUT) await this.startUser(game);
  }
}

export default App;
