const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants/Message');
const Computer = require('./Computer');
const Compare = require('./Compare');
const Control = require('./Control');
const InputValid = require('./InputValid');

class App {
  constructor() {
    this.computer = new Computer();
  }

  async play() {
    this.printStartMessage();
    const computerNumber = this.computer.generateNumber().join('');

    let userNumber;
    let result;
    do {
      try {
        userNumber = await this.getUserInput();
        InputValid.validate(userNumber);  

        result = Compare.compareAndPrintResult(computerNumber, userNumber);

        if (result.strike === 3) {
          await Control.askRestart(this.play.bind(this));
        }
      } catch (error) {
        Console.print(error.message);
      }
    } while (result.strike !== 3);
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
