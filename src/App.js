const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, ERROR_MESSAGE } = require('./constants/Message');
const Computer = require('./Computer');
const Control = require('./Control'); 
const InputValid = require('./InputValid');

class App {
  constructor() {
    this.computer = new Computer();
    this.isPlaying = true;
  }

  async play() {
    Console.print(GAME_MESSAGE.GAME_START);
  
    while (this.isPlaying) {
      const computerNumber = this.computer.generateNumber();
      let result = { strike: 0, ball: 0 };
  
      while (result.strike !== 3 && this.isPlaying) {
        try {
          const userNumber = await this.getUserInput();
          InputValid.validate(userNumber);
  
          result = Control.compareAndPrintResult(computerNumber, userNumber);
  
          if (result.strike === 3) {
            await Control.askRestart(this);
          }
        } catch (error) {
          Console.print(error.message);
          this.stopGame(); 
          throw error;
        }
      }
    }
  }

  stopGame() {
    this.isPlaying = false;
  }

  async getUserInput() {
    const input = await Console.readLineAsync(GAME_MESSAGE.NUMBER_INPUT);
    if (!input) {
        throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }
    return input;
  }
}

module.exports = App;