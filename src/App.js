import makeRandomNumber from "./utils/makeRandomNumber";

const { Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.gameTurn();
  }

  gameTurn() {
    const randomNumber = makeRandomNumber();
    this.gameStart(randomNumber);
  }

  gameStart() {}
}

const app = new App();
app.play();

export default App;
