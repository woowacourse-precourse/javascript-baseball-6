import Balls from "./Balls.js";
import GameView from "./GameView.js";

class App {
  constructor() {
    this.balls = new Balls();
    this.view = new GameView();
  }
  async play() {
    this.view.printStartGame("숫자 야구 게임을 시작합니다.");

    while (true) {
      const inputNumbers = await this.view.getPlayerGuess();
      this.balls.isValidInput(inputNumbers);
    }
  }
}
export default App;
const app = new App();
app.play();
