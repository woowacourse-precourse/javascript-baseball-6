const BaseballGame = require("./lib/BaseballGame");
const { Console } = require("@woowacourse/mission-utils")

class App {
  async play() {
    try {
      const baseballGame = new BaseballGame();
      await baseballGame.play()
    } catch(e) {
      Console.print(e.message)
      throw e
    }
  };
};

module.exports = App;
