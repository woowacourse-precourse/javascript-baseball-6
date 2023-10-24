import { Console } from '@woowacourse/mission-utils';

import { generateRandomNumber } from './generateRandomNumber';
import { userInput, userInputValidation } from './userInput';
import { checkResult } from './result';
import { GAME_END, TEXT, ERROR } from './constants/constants';

class App {
  async play() {
    Console.print(TEXT.INITIAL);
    try {
      this.computerNumber = generateRandomNumber();
      await this.userInputCheck();
    } catch (e) {
      throw new Error(`[ERROR] ${e}`);
    }
  }

  async userInputCheck() {
    this.userNumber = await userInput();
    const isValidationSuccess = userInputValidation(this.userNumber);
    if (isValidationSuccess) await this.compareResult();
    else throw new Error(ERROR.INVALID_RETRY);
  }

  async compareResult() {
    const isSuccess = checkResult(this.computerNumber, this.userNumber);
    if (isSuccess) {
      return this.finishGame();
    } else {
      return this.userInputCheck();
    }
  }

  finishGame() {
    Console.print(TEXT.CORRECT_ANSWER);
    this.checkResetGame();
  }

  async checkResetGame() {
    Console.print(TEXT.RETRY);
    const isGameRestart = await Console.readLineAsync('');
    if (isGameRestart === GAME_END.RETRY) return this.play();
    else if (isGameRestart !== GAME_END.EXIT) return this.checkResetGame();
  }
}

const app = new App();
app.play();

export default App;
