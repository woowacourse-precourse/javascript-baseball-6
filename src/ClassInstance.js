import GenerateRandomNumber from "./GenerateRandomNumber.js";
import Validator from "./Validator.js";
import CheckGuess from "./CheckGuess.js";
import Restart from "./Restart.js";

class ClassInstance {
  constructor() {
    this.generateRandom = new GenerateRandomNumber();
    this.validatorInstance = new Validator();
    this.checkGuessInstance = new CheckGuess();
    this.restartInstance = new Restart();
  }

  generateRandomNumber(min, max) {
    return this.generateRandom.generateRandomNumber(min, max);
  }

  validator(input) {
    return this.validatorInstance.validator(input);
  }

  checkGuess(input, answer) {
    return this.checkGuessInstance.checkGuess(input, answer);
  }

  restart() {
    return this.restartInstance.restart();
  }
}

export default ClassInstance;
