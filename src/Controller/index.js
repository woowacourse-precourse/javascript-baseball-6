class Controller {
  constructor(game) {
    this.game = game;
  }

  async play() {
    await this.game.start();
  }
}

export default Controller;
