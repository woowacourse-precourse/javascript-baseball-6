import { Console } from '@woowacourse/mission-utils';
import { generateComputerNumber } from './utils/generateComputerNumber.js';
import { validateUserNumber } from './utils/validateUserNumber.js';
import { calculateResult } from './utils/calculateResult.js';
import { printResult } from './utils/printResult.js';

class App {
  constructor() {
    this.computerRandomNumber = '';
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다');
    this.computerRandomNumber = generateComputerNumber();
    await this.gameProgress();
  }

  async gameProgress() {
    const userInputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    validateUserNumber(userInputNumber);
    const { ballCount, strikeCount } = calculateResult(this.computerRandomNumber, userInputNumber);
    const result = await printResult(ballCount, strikeCount);

    if (result === 'GameOver') {
      return Console.print('Game Over');
    }

    if (result === 'Restart') {
      this.computerRandomNumber = generateComputerNumber();
    }

    this.gameProgress();
  }
}

const app = new App();
app.play();

export default App;
