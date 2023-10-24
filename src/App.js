const { startGame } = require("./modules/startGame");
const { playGame } = require("./modules/playGame");


class App {
  play() {
    try {
      startGame();
      playGame();
    } catch (error) {
      throw "[ERROR]";
    }
  }
}

module.exports = App;
