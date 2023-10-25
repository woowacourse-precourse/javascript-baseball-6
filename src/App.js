import GameController from '../controller/GameController.js'
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  gameController = new GameController();
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameController.startGame();
  }
}

export default App;

const app = new App();
app.play();