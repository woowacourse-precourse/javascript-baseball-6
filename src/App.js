import {Console} from "@woowacourse/mission-utils"
import GameController from "./gameController.js";
import GameMessage from "./GameMessage.js";
import Validator from "./Validator.js";
class App {

  constructor() {
    this.computer;
    this.userInput;
    this.message = new GameMessage();
    this.gameController = new GameController()
    this.validator = new Validator()
  }

  async play() {
    this.message.PRINT_GAME_START_MESSAGE()
    this.computer = this.gameController.makeRandomNumber()
    // console.log("컴퓨터 정답값 생성",this.computer)
    this.getUserInput()

  }

  async getUserInput() {
    const userInput = await Console.readLineAsync("숫자를 입력해주세요 :")
    if (this.validator.checkValidInput(userInput)) this.userInput = userInput
  }
}

export default App;
