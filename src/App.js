const { Console } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('./constants/Message');

class App {
  async play() {
    this.printStartMessage();
  }
  
  printStartMessage() {
    Console.print(GAME_MESSAGE.GAME_START); 
  }
}

export default App;
