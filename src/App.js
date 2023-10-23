const { Console } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGE,
  BASEBALL_MESSAGE,
  END_OPTION,
  ERROR_MESSAGE,
} = require("./contants");
const { Computer } = require("./contants/Computer");

class App {
  async play() {
    //게임 시작 메세지
    Console.print(GAME_MESSAGE.START);
    const computer = new Computer();
    this.computerNumber = computer.generateComputerNumber();
    return this.BaseballGame(this.computerNumber);
  }
}

export default App;
