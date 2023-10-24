const { Console } = require("@woowacourse/mission-utils");
const { BaseballGame } = require("./BaseballGame.js");
const { ERROR_MESSAGE } = require("./constants");

class App {
  async play() {
    const baseballGame = new BaseballGame();

    // 게임 시작 메서드(BaseballGame) 호출
    let result = await baseballGame.startBasballGame();
    if (!result) throw new Error(ERROR_MESSAGE.IS_START);
  }
}

export default App;
