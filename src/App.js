const BaseballGame = require('./BaseballGame');

class App {
  async play() {
    const game = new BaseballGame();
    game.start();
  }
}

module.exports = App;