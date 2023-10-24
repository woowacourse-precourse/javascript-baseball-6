import { Random, Console } from '@woowacourse/mission-utils'
import {
  NUM,
  PRINT_STRING,
  PRINT_ERROR_STRING,
} from './constants.js'

class App {
  #computer

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

  async play() {
    if (!this.#computer) {
      this.printGameStart();
    }
    this.generateRandomNumbers()
  }
}

const app = new App();
app.play();

export default App;
