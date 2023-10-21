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
      if (!this.isValidNumberInput(userNumber)) {
        this.printErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
      }
    } while (!this.isValidNumberInput(userNumber));
  }

  printStartMessage() {
    Console.print(GAME_MESSAGE.GAME_START); 
  }

  async getUserInput() {
    const input = await Console.readLineAsync(GAME_MESSAGE.NUMBER_INPUT);
    return input;
  }

  isValidNumberInput(input) {
    if (input.length !== 3) {
      return false;
    }

    for (let char of input) {
      if (char < '1' || char > '9') {
        return false;
      }
    }

    const distinctDigits = new Set(input);
    if (distinctDigits.size !== 3) {
      return false;
    }
    return true;
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}

export default App;
