import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE } from './constants/Message';
import Computer from './models/Computer';
import GameControl from './utils/GameControl';
import InputValid from './utils/InputValid';

class App {
  constructor() {
    this.computer = new Computer();
    this.isPlaying = true;
  }

  async play() {
    Console.print(GAME_MESSAGE.startGame);

    while (this.isPlaying) {
      const computerNumber = this.computer.generateNumber();
      let result = { strike: 0, ball: 0 };

      while (result.strike !== 3 && this.isPlaying) {
        try {
          const userNumber = await this.getUserInput();
          InputValid.validate(userNumber);
          result = GameControl.compareAndPrintResult(computerNumber, userNumber);

          if (result.strike === 3) {
            await GameControl.askRestart(this);
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
    const input = await Console.readLineAsync(GAME_MESSAGE.inputNumber);

    if (!input) {
      throw new Error(ERROR_MESSAGE.inputError);
    }

    return input;
  }
}

export default App;