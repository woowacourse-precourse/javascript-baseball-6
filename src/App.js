import Balls from "./Balls.js";
import Output from "./GameView/Output.js";
import Input from "./GameView/Input.js";
import { GAME } from "./utils/Constants.js";

class App {
  constructor() {
    this.balls = new Balls();
    this.input = new Input();
    this.output = new Output();
    this.isGameEnded = false;
  }

  async play() {
    this.output.printStartGame();

    while (!this.isGameEnded) {
      const inputNumbers = await this.input.getPlayerGuess();
      this.balls.inputValidation(inputNumbers);

      const ball = this.balls.calculateBall(inputNumbers);
      const strike = this.balls.calculateStrike(inputNumbers);

      if (strike === GAME.THREE_STRIKE) {
        this.output.printSuccess();
        this.isGameEnded = await this.input.askRestart();
        if (this.isGameEnded === false) {
          this.output.printRestartGame();
          this.balls.regenerateRandomNumber();
        }
      } else {
        this.output.printHint(strike, ball);
      }
    }
  }
}
export default App;
const app = new App();
app.play();
