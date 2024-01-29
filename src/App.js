import User from "./User.js";
import {Console} from "@woowacourse/mission-utils"
import GameController from "./gameController.js";
import GameMessage from "./GameMessage.js";
class App {

  constructor() {
    this.computer;
    this.message = new GameMessage();
    this.gameController = new GameController()
  }

  async play() {
    this.message.PRINT_GAME_START_MESSAGE()
    this.computer = this.gameController.makeRandomNumber()
    console.log("컴퓨터 정답값 생성",this.computer)
    this.message.PRINT_HINT_MESSAGE(3,0)
  }


}

export default App;
