import { Console, Random } from '@woowacourse/mission-utils';
import { validateUserNumber } from './utils/validateUserNumber.js';
import { calculateResult } from './utils/calculateResult.js';
import { printResult } from './utils/printResult.js';

class App {
  constructor() {
    this.computerRandomNumber = '';
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다');
    this.computerRandomNumber = this.generateComputerNumber();
    await this.gameProgress();
  }

  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber.join('');
  }

  async gameProgress() {
    const userInputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    validateUserNumber(userInputNumber);
    const { ballCount, strikeCount } = calculateResult(this.computerRandomNumber, userInputNumber);
    if (strikeCount === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.askRestart();
      return;
    }
    const result = printResult(ballCount, strikeCount);
    Console.print(result);

    await this.gameProgress();
  }

  async askRestart() {
    const userRestartAnswer = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    if (userRestartAnswer === '1') {
      this.computerRandomNumber = this.generateComputerNumber();
      await this.gameProgress();
    }
  }
}

const app = new App();
app.play();

export default App;
