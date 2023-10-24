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

    await this.play();
    await this.playOrEnd();
  }

  async play() {
    const guessNumber = await InputView.readGuessNumber();
    const result = this.baseballGame.result(guessNumber, this.computer.getValue());

    OutputView.printGuessResult(result);
  }

  async end() {
    OutputView.printEndMessage();
    const answer = await InputView.readRestartAnswer();

    await this.restartOrExit(answer);
  }

  async playOrEnd() {
    this.baseballGame.isPlaying ? await this.play() : await this.end();
  }


  async restartOrExit(answer) {
    this.baseballGame.isRestart(answer) ? await this.restart() : this.exit();
  }

  async restart() {
    this.baseballGame.start();
    this.computer.reset();
    this.computer.start();

    await this.play();
  }

  exit() {
    this.baseballGame = null;
    this.computer = null;
    OutputView.printExitMessage();
  }
}

export default BaseballGameController;