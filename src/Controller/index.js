import Input from '../View/Input.js';
import Output from '../View/Output.js';
import Computer from '../Computer/index.js';
import Validator from '../Validator/index.js';
import { COMMAND } from '../constants/index.js';

class Controller {
  constructor() {
    this.computer = new Computer();
    this.replay = false;
  }

  start() {
    if (!this.replay) {
      this.replay = true;
      Output.print(COMMAND.WELCOME);
    }
    this.computer.generate();
    this.askNumber();
  }

  askNumber() {
    Input.readAsync(COMMAND.ASK_NUMBER, (input) => {
      Validator.guessNumber(input);
      const { matchString, isMatch } = this.computer.match(input);
      Output.print(matchString);
      if (isMatch) {
        Output.print(COMMAND.MATCH);
        this.askReplay();
        return;
      }
      this.askNumber();
    });
  }
}

export default Controller;
