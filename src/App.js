const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE } = require("./constants");

class App {
  async play() {
    
    // 게임 시작 메서드(BaseballGame) 호출
    return this.BaseballGame(this.computerNumber);
  }
}

export default App;
