import { Console, Random } from '@woowacourse/mission-utils';
import { isDuplicatedNumber, isEmptyValue, isNotValidLength, isNotValidNumberRange } from './utils/validateRules.js';
import { calculateResult } from './utils/calculateResult.js';
import { COMPUTER_RANGE, ERROR, MESSAGE, PROMPT, REQUEST, RESULT, RULES } from './constants/constant.js';

class App {
  constructor() {
    this.computerRandomNumber = '';
  }

  async play() {
    Console.print(MESSAGE.START);
    this.computerRandomNumber = this.generateComputerNumber();
    await this.askNumber();
  }

  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < RULES.MAX_LENGTH) {
      const randomNumber = Random.pickNumberInRange(COMPUTER_RANGE.MIN, COMPUTER_RANGE.MAX);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber.join('');
  }

  async askNumber() {
    const userInput = await Console.readLineAsync(REQUEST.NUMBER);
    console.log('유저 : ', userInput);
    console.log('컴퓨터 : ', this.computerRandomNumber);
    this.validateUserNumber(userInput);

    const { ballCount, strikeCount } = calculateResult(this.computerRandomNumber, userInput);
    const result = this.printResult(ballCount, strikeCount);
    Console.print(result);

    // 정답일 경우 재시작 요청
    if (strikeCount === RULES.MAX_LENGTH) {
      Console.print(MESSAGE.CORRECT);
      await this.askRestart();
      return;
    }

    // 정답이 아닐 경우 재입력 요청
    await this.askNumber();
  }

  validateUserNumber(userInput) {
    if (isEmptyValue(userInput)) {
      throw new Error(ERROR.EMPTY);
    } else if (isNotValidLength(userInput)) {
      throw new Error(ERROR.INVALID_LENGTH);
    } else if (isNotValidNumberRange(userInput)) {
      throw new Error(ERROR.INVALID_NUMBER_RANGE);
    } else if (isDuplicatedNumber(userInput)) {
      throw new Error(ERROR.DUPLICATED_NUMBER);
    }
  }

  printResult(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      return RESULT.NOTHING;
    }
    if (ballCount > 0 && strikeCount === 0) {
      return `${ballCount}${RESULT.BALL}`;
    }
    if (ballCount === 0 && strikeCount > 0) {
      return `${strikeCount}${RESULT.STRIKE}`;
    }
    if (ballCount > 0 && strikeCount > 0) {
      return `${ballCount}${RESULT.BALL} ${strikeCount}${RESULT.STRIKE}`;
    }
  }

  async askRestart() {
    const userRestartAnswer = await Console.readLineAsync(REQUEST.RESTART);
    if (userRestartAnswer === PROMPT.RESTART) {
      this.computerRandomNumber = this.generateComputerNumber();
      await this.askNumber();
    }
  }
}

const app = new App();
app.play();

export default App;
