import { Console, MissionUtils } from "@woowacourse/mission-utils";
import GameConsole from "./GameConsole.js";
import Cpu from "./Cpu.js";
import User from "./User.js";
import ReturnGameResult from "./ReturnGameResult.js";
import PrintGameMessage from "./PrintGameMessage.js";
import NewGameController from "./NewGameController.js";

class App {
  constructor() {
    this.cpu = new Cpu();
    this.user = new User();
    this.returnGameResult = new ReturnGameResult();
    this.printGameMessage = new PrintGameMessage();
    this.newGameController = new NewGameController(this);
  }
  async play() {
    GameConsole.print("숫자 야구 게임을 시작합니다.");
    const cpuNum = this.cpu.cpuPickNum();
    let result;
    do {
      const userNum = await this.user.userPickNum();
      result = this.returnGameResult.getStrikeBallCount(cpuNum, userNum);
      this.printGameMessage.compareResult(result.strike, result.ball);
    } while (result.strike !== 3);

    GameConsole.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    await this.newGameController.startOrExitGame();
  }
}

const app = new App();
app.play();

export default App;
