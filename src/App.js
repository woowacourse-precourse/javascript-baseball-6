import Balls from "./Balls.js";
import GameView from "./GameView.js";

class App {
  constructor() {
    this.balls = new Balls();
    this.view = new GameView();
    this.isGameEnded = false;
  }

  async play() {
    this.view.printStartGame("숫자 야구 게임을 시작합니다.");

    while (!this.isGameEnded) {
      const inputNumbers = await this.view.getPlayerGuess();
      this.balls.inputValidation(inputNumbers);

      const ball = this.balls.calculateBall(inputNumbers);
      const strike = this.balls.calculateStrike(inputNumbers);

      if (strike === 3) {
        this.view.printSuccess();
        this.isGameEnded = await this.view.askRegame();
        if (this.isGameEnded === false) {
          this.view.printRestartGame();
          this.balls.regenerateRandomNumber();
        }
      } else {
        this.view.printHint(strike, ball);
      }
    }
  }
}
export default App;
const app = new App();
app.play();
