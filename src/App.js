const { Console } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('./constants/Message');
const Computer = require('./Computer');

class App {
  constructor() {
    this.computer = new Computer();
  }
  
  async play() {
    this.printStartMessage();
    const computerNumber = this.computer.generateNumber();

    const userNumber = await this.getUserInput();
  }

  printStartMessage() {
    Console.print(GAME_MESSAGE.GAME_START); 
  }

  async getUserInput() {
    const input = await Console.readLineAsync(GAME_MESSAGE.NUMBER_INPUT);
    return input;
  }
}

export default App;

