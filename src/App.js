const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE } = require("./constants");
const { Computer } = require("./Computer");

class App {
  async play() {
    // 게임 시작 메세지 출력
    Console.print(GAME_MESSAGE.START);
    // TODO : 1~9까지 랜덤 숫자를 생성하는 기능
    const computer = new Computer();
    this.computerNumber = computer.generateComputerNumber();
    // 게임 시작 메서드(BaseballGame) 호출
    return this.BaseballGame(this.computerNumber);
  }
}

export default App;
