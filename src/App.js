import { Console } from '@woowacourse/mission-utils';

import { generateRandomNumber } from './generateRandomNumber';
import { userInput, userInputValidation } from './userInput';
import { checkResult } from './result';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
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
    else throw new Error('숫자가 잘못된 형식입니다.');
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
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.checkResetGame();
  }

  async checkResetGame() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const isGameRestart = await Console.readLineAsync('');
    if (isGameRestart === '1') return this.play();
    else if (isGameRestart !== '2') return this.checkResetGame();
  }
}

const app = new App();
app.play();

export default App;
