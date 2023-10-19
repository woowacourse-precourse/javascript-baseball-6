import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
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

  validateUserInput(userNumbers) {
    if (!Validator.checkIsNumber(userNumbers)) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }
    if (!Validator.checkIsThreeNumbers(userNumbers)) {
      throw new Error(ERROR.NOT_THREE_NUMBERS);
    }
    if (!Validator.checkHasDuplicate(userNumbers)) {
      throw new Error(ERROR.HAS_DUPLICATE);
    }
  }
}

const app = new App();
app.play();

export default App;
