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
  }
  
  printStartMessage() {
    Console.print(GAME_MESSAGE.GAME_START); 
  }
}

export default App;
