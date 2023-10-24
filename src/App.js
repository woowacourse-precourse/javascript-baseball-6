import { MESSAGE } from './constants/message.js';
import { RESTART_COMMAND } from './constants/system.js';
import { BaseballService } from './service/BaseballService.js';
import { inputView, outputView } from './views/index.js';

class App {
  #view = {
    input: inputView,
    output: outputView,
  };

  #service = {
    baseball: BaseballService.of(),
  };

  async play() {
    // console.log(this.#service.baseball.answer.targetBalls.balls.map((ball) => ball.number));
    await this.processTurn();
  }

  async #getUserNumbers() {
    const numbers = await this.#view.input.readLine(MESSAGE.enterSubmitBall);
    return numbers.split('').map(Number);
  }

  async processTurn() {
    const userNumbers = await this.#getUserNumbers();
    const result = this.#service.baseball.computeScore(userNumbers);
    this.#view.output.print(result);
    if (this.#service.baseball.isEnd()) {
      this.completeGame();
      return;
    }
    this.processTurn();
  }

  async #getRestartCommand() {
    const command = await this.#view.input.readLine(MESSAGE.completeGame);
    return command.trim();
  }

  async completeGame() {
    const restartCommand = await this.#getRestartCommand();
    if (restartCommand === RESTART_COMMAND.DENY) {
      return;
    }
    this.#service.baseball.init();
    this.processTurn();
  }
}

const app = new App();
app.play();

export default App;
