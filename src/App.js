import { MissionUtils} from '@woowacourse/mission-utils';

const { MESSAGES } = require("./constants");
const { playGame } = require("./modules/playGame");



class App {
  async play() {
    this.startGame();
    playGame();
  }

  startGame() {
    const START = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(MESSAGES.START);
    }
}
export default App;
