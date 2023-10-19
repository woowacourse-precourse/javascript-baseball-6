const BaseballGame = require("./lib/BaseballGame");

class App {
  async play() {
    try {
      const baseballGame = new BaseballGame();
      await baseballGame.play()
    } catch(e) {
      throw e
    }
  };
};

module.exports = App;
