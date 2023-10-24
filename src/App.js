import { Random, Console } from '@woowacourse/mission-utils'
import {
  NUM,
  PRINT_STRING,
  PRINT_ERROR_STRING,
} from './constants.js'

class App {

  printGameStart() {
    Console.print(PRINT_STRING.GAME_START)
  }

  async play() {
    this.printGameStart()
  }
}

const app = new App();
app.play();

export default App;
