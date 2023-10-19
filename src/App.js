const BaseballGame = require("./lib/BaseballGame")

class App {
  async play() {
    const baseballGame = new BaseballGame()
  }
}

module.exports = App;
