const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, ERROR_MESSAGE } = require('./constants/Message');
const Computer = require('./Computer');

class App {
  constructor() {
    this.computer = new Computer();
  }
  
  async play() {
    this.printStartMessage();
    const computerNumber = this.computer.generateNumber();

    let userNumber;
    do {
      userNumber = await this.getUserInput();
      this.validateUserInput(userNumber); 
    } while (true); 
  }

  printStartMessage() {
    Console.print(GAME_MESSAGE.GAME_START); 
  }

  async getUserInput() {
    const input = await Console.readLineAsync(GAME_MESSAGE.NUMBER_INPUT);
    return input;
  }

  validateUserInput(input) {
    this.validateLength(input);
    this.validateNumberInRange(input);
    this.ensureNoDuplicateNumber(input);
  }

  validateLength(input) {
    if (input.length !== 3) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }
  }

  validateNumberInRange(input) {
    for (let char of input) {
      if (char < '1' || char > '9') {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
      }
    }
  }

  ensureNoDuplicateNumber(input) {
    const distinctDigits = new Set(input);
    if (distinctDigits.size !== 3) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}

export default App;
