import { Random, Console } from '@woowacourse/mission-utils'
import {
  NUM,
  PRINT_STRING,
  PRINT_ERROR_STRING,
} from './constants.js'

class App {
  #computer
  #userNumber

  constructor() {
    this.callbackUserNumber = this.callbackUserNumber.bind(this)
  }

  printGameStart() {
    Console.print(PRINT_STRING.GAME_START)
  }

  generateRandomNumbers() {
    this.#computer = [];
    while (this.#computer.length < NUM) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#computer.includes(number)) {
        this.#computer.push(number);
      }
    }
  }

  async inputUserNumber() {
    this.#userNumber = await Console.readLineAsync(PRINT_STRING.INPUT_NUMBER);
    this.callbackUserNumber()
  }

  convertToNumberArray() {
    this.#userNumber = this.#userNumber.split('').map((num) => Number(num));
  }

  arrayLengthCheck() {
    if (this.#userNumber.length !== 3) {
      throw new Error(PRINT_ERROR_STRING.ERROR_LENGTH);
    }
  }

  arrayValueRangeCheck() {
    console.log(this.#userNumber)
    for (let i = 0; i < this.#userNumber.length; i++) {
      if (!this.#userNumber[i] > 0 && this.#userNumber[i] < 10) {
        throw new Error(PRINT_ERROR_STRING.ERROR_RANGE);
      }
    }
  }

  arrayValueDuplicateCheck() {
    const numberSet = new Set(this.#userNumber);
    if (numberSet.size !== 3) {
      throw new Error(PRINT_ERROR_STRING.ERROR_DUPLE);
    }
  }

  arrayErrorCheck() {
    this.arrayLengthCheck()
    this.arrayValueRangeCheck()
    this.arrayValueDuplicateCheck()
  }

  callbackUserNumber() {
    this.convertToNumberArray();
    this.arrayErrorCheck();
  }

  async play() {
    if (!this.#computer) {
      this.printGameStart();
    }
    this.generateRandomNumbers()
    this.inputUserNumber()
  }
}

const app = new App();
app.play();

export default App;
