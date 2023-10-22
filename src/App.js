import { Console, Random } from '@woowacourse/mission-utils';
import {
  isDuplicatedNumber,
  isEmptyValue,
  isNotValidNumberRange,
  isOverMaxLength,
} from './utils/validateRules.js';
import { calculateResult } from './utils/calculateResult.js';

class App {
  constructor() {
    this.computerRandomNumber = '';
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다');
    this.computerRandomNumber = this.generateComputerNumber();
    await this.askNumber();
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

  async askNumber() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.validateUserNumber(userInput);

    const { ballCount, strikeCount } = calculateResult(this.computerRandomNumber, userInput);
    const result = this.printResult(ballCount, strikeCount);
    Console.print(result);

    // 정답일 경우 재시작 요청
    if (strikeCount === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.askRestart();
      return;
    }

    // 정답이 아닐 경우 재입력 요청
    await this.askNumber();
  }

  validateUserNumber(userInput) {
    if (isEmptyValue(userInput)) {
      throw new Error('[ERROR] 값을 입력하세요');
    } else if (isOverMaxLength(userInput)) {
      throw new Error('[ERROR] 3자리 숫자를 입력하세요');
    } else if (isNotValidNumberRange(userInput)) {
      throw new Error('[ERROR] 1-9 범위의 숫자를 입력하세요');
    } else if (isDuplicatedNumber(userInput)) {
      throw new Error('[ERROR] 중복되지 않는 숫자를 입력하세요');
    }
  }

  printResult(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      return `낫싱`;
    }
    if (ballCount > 0 && strikeCount === 0) {
      return `${ballCount}볼`;
    }
    if (ballCount === 0 && strikeCount > 0) {
      return `${strikeCount}스트라이크`;
    }
    if (ballCount > 0 && strikeCount > 0) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
  }

  async askRestart() {
    const userRestartAnswer = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    if (userRestartAnswer === '1') {
      this.computerRandomNumber = this.generateComputerNumber();
      await this.askNumber();
    }
  }
}

const app = new App();
app.play();

export default App;
