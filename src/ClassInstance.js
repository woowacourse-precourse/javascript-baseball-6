import ComputerClass from "./utils/Computer.js";
import ValidatorClass from "./utils/Validator.js";
import RestartClass from "./utils/Restart.js";
import HintClass from "./utils/Hint.js";

class ClassInstance {
  constructor() {
    this.computerClass = new ComputerClass();
    this.validatorClass = new ValidatorClass();
    this.hintClass = new HintClass();
    this.restartClass = new RestartClass();
  }

  getNumber(min, max) {
    return this.computerClass.getNumber(min, max);
  }

  validator(input) {
    return this.validatorClass.validator(input);
  }

  hint(input, answer) {
    return this.hintClass.hint(input, answer);
  }

  restart() {
    return this.restartClass.restart();
  }
}

export default ClassInstance;
