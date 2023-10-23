import { printMessage, readLineAsync, generateRandomNumber, isValidInput } from './utils';
import { MESSAGE } from './constants';

class App {
  gameStatus = true;

  async play() {
    printMessage(MESSAGE.START);
    generateRandomNumber();

    try {
      while (this.gameStatus) {
        const input = await readLineAsync(MESSAGE.INPUT_NUMBER);
        isValidInput(input);
        const num = input.split('').map(Number);
      }

    } catch (error) {
      this.gameStatus = false;
      throw new Error(error);
    }
  }
}

export default App;
