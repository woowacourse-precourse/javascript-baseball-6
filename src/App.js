import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';
import { ERROR, MESSAGE } from './Constant.js';
import Validator from './Validator.js';

class App {
  async play() {
    Console.print(MESSAGE.START_GAME);
    const game = await new BaseballGame();
    await this.getUserGuessInput();
  }

  async getUserGuessInput() {
    Console.readLineAsync(MESSAGE.ENTER_NUMBERS).then((inputNumbers) => {
      const userNumbers = this.splitUserInput(inputNumbers);
      this.validateUserInput(userNumbers);
    });
  }

  splitUserInput(input) {
    return input.split('').map(Number);
  }
}

const app = new App();
app.play();

export default App;
