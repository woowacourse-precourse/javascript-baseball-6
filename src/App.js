import BaseballGame from './BaseballGame.js';
import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

class App {
  async play() {
    Console.print(MESSAGE.START_GAME);
    const game = await new BaseballGame();
    await this.getUserGuessInput();
  }

  async getUserGuessInput() {
    Console.readLineAsync(MESSAGE.ENTER_NUMBERS).then((inputNumbers) => {
      const userNumbers = inputNumbers;
    });
  }
}

const app = new App();
app.play();

export default App;
