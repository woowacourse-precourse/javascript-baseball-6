import Computer from './Computer/index.js';
import Validator from './Validator/index.js';
import { Input, Output } from './View/index.js';
import { COMMAND, NUMS } from './constants/index.js';

class BaseballGame {
  constructor() {
    this.computer = null;
    this.isReplay = false;
  }

  async start() {
    if (!this.isReplay) {
      this.isReplay = true;
      Output.log(COMMAND.WELCOME);
    }
    this.computer = new Computer();
    this.computer.generate();
    await this.askNumber();
  }

  async askNumber() {
    const input = await Input.readAsync(COMMAND.ASK_NUMBER);
    Validator.validateGuessNumber(input);

    const { matchString, isMatch } = this.computer.match(input);
    Output.log(matchString);

    if (isMatch) {
      Output.log(COMMAND.MATCH);
      await this.askReplay();
      return;
    }
    await this.askNumber();
  }

  async askReplay() {
    const input = await Input.readAsync(COMMAND.ASK_REPLAY);
    Validator.validateControlNumber(input);

    if (input === NUMS.REPLAY) {
      await this.start();
    }
  }
}

export default BaseballGame;
