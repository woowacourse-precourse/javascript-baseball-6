import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';
import RandomGenerator from './RandomGenerator.js';
import UserInput from './UserInput.js';
import ValidateCheck from './ValidateCheck.js';

class App {
  computerNumber;
  userNumber;

  constructor() {
    this.randomGenerator = new RandomGenerator();
    this.userInput = new UserInput();
    this.validateCheck = new ValidateCheck();
    Console.print(MESSAGE.startMessage);
  };

  async play() {
    this.computerNumber = this.randomGenerator.randomNumber();
    return this.start();
  };

  async start() {
    this.userNumber = await this.userInput.getUserNumber();
    this.userNumber = this.validateCheck.checkUserNumber(this.userNumber);
    return this.countStrike();
  }

  //컴퓨터의 수와 입력한 값 비교
  countStrike() {
    const STRIKE = [...this.computerNumber].filter((x, idx) => this.userNumber[idx] === x).length;
    const BALL = [...this.computerNumber].filter(x => this.userNumber.includes(x)).length - STRIKE;
    return this.printStrikeBall(STRIKE,BALL);
  };

  //스트라이크와 볼 개수 출력
  async printStrikeBall(strike, ball) {
    let answer = '';
    
    if (ball > 0) answer += `${ball}볼 `;
    if (strike > 0) answer += `${strike}스트라이크`;
    if (ball + strike === 0) answer = `낫싱`;
    Console.print(answer)
    
    if (strike !== 3) {
      return this.start();
    };

    const RETRY = await this.userInput.chooseRetry();
    this.validateCheck.checkRetry(RETRY);
    return this.retryOrExit(RETRY);
  };

  retryOrExit(retryNumber) {
    if (retryNumber === '1') {
      this.play();
    } else {
      Console.print(MESSAGE.gameOver);
    };
  };
};

// const app = new App();
// app.play();

export default App;
