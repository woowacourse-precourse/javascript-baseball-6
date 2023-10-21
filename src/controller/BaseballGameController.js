import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import BaseballGame from "../domain/BaseballGame.js";
import Computer from "../domain/Computer.js";

class BaseballGameController {
  constructor() {
    this.computer = null;
    this.baseballGame = null;
  }

  async start() {
    OutputView.printStartMessage();
    this.baseballGame = new BaseballGame();
    this.computer = new Computer();

    this.baseballGame.start();
    this.computer.start();

    return await this.play();
  }

  async play() {
    const guessNumber = await InputView.readGuessNumber();
    const result = this.baseballGame.result(guessNumber, this.computer.getValue());

    OutputView.printGuessResult({
      strike: result.strike,
      ball: result.ball,
    });

    return await this.playOrEnd();
  }

  async playOrEnd() {
    return this.baseballGame.isPlaying ? await this.play() : this.end();
  }

  async end() {
    OutputView.printEndMessage();
    const answer = await InputView.readRestartAnswer();

    return await this.restartOrExit(answer);
  }

  async restartOrExit(answer) {
    return this.baseballGame.isRestart(answer) ? await this.restart() : this.exit();
  }

  async restart() {
    this.baseballGame.start();
    this.computer.reset();
    this.computer.start();

    return await this.play();
  }

  exit() {
    this.baseballGame = null;
    OutputView.printExitMessage();
  }
}

export default BaseballGameController;