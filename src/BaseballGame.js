import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';
import RandomGenerator from './RandomGenerator.js';
import UserInput from './UserInput.js';
import ValidateCheck from './ValidateCheck.js';

class BaseballGame {
  computerNumber;
  userNumber;

  constructor() {
    this.userInput = new UserInput();
    this.validateCheck = new ValidateCheck();
    this.randomGenerator = new RandomGenerator();
    this.computerNumber = this.randomGenerator.randomNumber();
  };

  async getNumber() {
    const USER_NUMBER = await this.userInput.getUserNumber();
    this.userNumber = this.validateCheck.checkUserNumber(USER_NUMBER);
    return this.countStrike();
  };

  countStrike() {
    const STRIKE = [...this.computerNumber].filter((x, idx) => this.userNumber[idx] === x).length;
    const BALL = [...this.computerNumber].filter(x => this.userNumber.includes(x)).length - STRIKE;
    return this.printStrikeBall(STRIKE,BALL);
  };

  printStrikeBall(strike, ball) {
    let answer = '';
    
    if (ball > 0) answer += `${ball}볼 `;
    if (strike > 0) answer += `${strike}스트라이크`;
    if (ball + strike === 0) answer = `낫싱`;
    Console.print(answer)

    return this.isStrike(strike);
  };

  isStrike(strike) {
    if (strike !== 3) {
      return this.getNumber();
    };

    return this.allStrike();
  };

  async allStrike() {
    const RETRY = await this.userInput.chooseRetry();
    this.validateCheck.checkRetry(RETRY);
    return this.retryOrExit(RETRY);
  };

  retryOrExit(retryNumber) {
    if (retryNumber === '1') {
      this.computerNumber = this.randomGenerator.randomNumber();
      this.getNumber();
    } else {
      Console.print(MESSAGE.gameOver);
    };
  };
};

export default BaseballGame;
