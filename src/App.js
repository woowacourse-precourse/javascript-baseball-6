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

      const ball = this.balls.calculateBall(inputNumbers);
      const strike = this.balls.calculateStrike(inputNumbers);

      if (strike === 3) {
        this.view.printSuccess();
      } else {
        this.view.printHint(strike, ball);
      }
    }
  }
}
export default App;
const app = new App();
app.play();
