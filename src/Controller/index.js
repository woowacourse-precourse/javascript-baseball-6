import Output from '../View/Output.js';
import Computer from '../Computer/index.js';
import { COMMAND } from '../constants/index.js';

class Controller {
  constructor() {
    this.computer = new Computer();
    this.replay = false;
  }

  start() {
    if (!this.replay) {
      Output.print(COMMAND.WELCOME);
    }
    this.computer.generate();
    this.askNumber();
  }
}

export default Controller;
