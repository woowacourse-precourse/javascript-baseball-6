import { read, write } from './IO.js';

const TEXT = {
  ENTER_GUESS: '숫자를 입력해주세요 : ',
  ENTER_CONTINUE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  ERROR_GUESS:
    '[ERROR] 1이상 9이하의 서로 다른 3개의 숫자로 구성된 수를 입력하세요.',
  ERROR_CONTINUE: '[ERROR] 1 또는 2를 입력하세요.',
};

// App에서 사용하는 함수들에 대한 구현
export class Controls {
  // get user input
  static async getUserGuess() {
    const userInput = await read(TEXT.ENTER_GUESS);
    if (!this.validateGuess(userInput)) {
      throw new Error(TEXT.ERROR_GUESS);
    }
    return userInput;
  }
  static async getUserContinue() {
    const userInput = await read(TEXT.ENTER_CONTINUE);
    if (!this.validateContinue(userInput)) {
      throw new Error(TEXT.ERROR_CONTINUE);
    }
    return userInput;
  }

  // functions
  static printResult(result) {
    if (result.ball !== 0 && result.strike !== 0) {
      write(`${result.ball}볼 ${result.strike}스트라이크`);
    }
    if (result.ball !== 0 && result.strike === 0) {
      write(`${result.ball}볼`);
    }
    if (result.ball === 0 && result.strike !== 0) {
      write(`${result.strike}스트라이크`);
    }
    if (result.ball === 0 && result.strike === 0) {
      write(`낫싱`);
    }
  }

  // user input validators
  static validateGuess(query) {
    let ok = true;
    if (query.length !== 3) ok = false;
    if (isNaN(query)) ok = false;
    return ok;
  }
  static validateContinue(query) {
    let ok = true;
    if (query !== '1' && query !== '2') ok = false;
    return ok;
  }
}
