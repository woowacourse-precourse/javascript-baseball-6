const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE } = require('./constants/Message');
const Computer = require('./Computer');

class App {
  constructor() {
    this.computer = new Computer();
  }
  
  async play() {
    this.printStartMessage();
    const computerNumber = this.computer.generateNumber();

    let userNumber;
    let result;
    do {
      userNumber = await this.getUserInput();
      this.validateUserInput(userNumber); 

      result = this.compareNumber(computerNumber, userNumber);
      this.printResult(result);
      
      if (result.strike === 3) {
        await this.askRestart();
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

  compareNumber(computerNumber, userNumber) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === userNumber[i]) {
        strike++;
      } else if (computerNumber.includes(userNumber[i])) {
        ball++;
      }
    }
    return { ball, strike };
}

  printResult(result) {
    const { ball, strike } = result;

    if (strike === 3) {
      Console.print(`${strike} ${RESULT_MESSAGE.STRIKE}`);
      Console.print(GAME_MESSAGE.CORRECT_ANSWER);
      return;
    }
    
    if (strike === 0 && ball === 0) {
      Console.print(RESULT_MESSAGE.NOTHING);
    } else if (strike === 0 && ball !== 0) {
      Console.print(`${ball} ${RESULT_MESSAGE.BALL}`);
    } else if (strike !== 0 && ball === 0) {
      Console.print(`${strike} ${RESULT_MESSAGE.STRIKE}`);
    } else {
      Console.print(`${ball} ${RESULT_MESSAGE.BALL} ${strike} ${RESULT_MESSAGE.STRIKE}`);
    }
  }

  async askRestart() {
    const userAnswer = await Console.readLineAsync(GAME_MESSAGE.GAME_RESTART);
    
    if (userAnswer === '1') {
      await this.play();
    } else if (userAnswer === '2') {
      process.exit(); 
    } else {
      throw new Error(ERROR_MESSAGE.INVALID_CHOICE);
    }
  }  
}

export default App;