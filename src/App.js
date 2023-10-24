import generateRandomNumber from "./utils/generateRandomNumbers";

const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.gameTurn();
  }

  gameTurn() {
    const randomNumber = generateRandomNumber();
    this.gameStart(randomNumber);
  }

  gameStart() {}
}
export default App;
