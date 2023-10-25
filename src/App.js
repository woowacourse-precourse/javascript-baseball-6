const MissionUtils = require("@woowacourse/mission-utils");
const { totalGame } = require('./playing/totalgame');

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await totalGame();
  }
}

export default App;
