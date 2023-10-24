const { Console } = require("@woowacourse/mission-utils");
const { BaseballGame } = require("./BaseballGame.js");
const { GAME_MESSAGE } = require("./constants");

class App {
  async play() {
    const baseballGame = new BaseballGame();
    // 게임 시작 메서드(BaseballGame) 호출
    return baseballGame.startBasballGame();
  }
}

export default App;
