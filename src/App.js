import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from './constants.js';
import RandomGenerator from './RandomGenerator.js';
import UserInput from './UserInput.js';

class App {
  userInput;
  randomGenerator;
  computerNumber;
  userNumber;

  constructor() {
    this.randomGenerator = new RandomGenerator();
    this.userInput = new UserInput();
    Console.print(MESSAGE.startMessage);
  };

  async play() {
    this.computerNumber = this.randomGenerator.randomNumberr();
    return this.start();
  };

  async start() {
    this.userNumber = await this.userInput.getUserNumber();
    return this.checkInputValidate();
  }

  // 입력받은 수 유효성 검사
  checkInputValidate() {
    const IS_UNIQUE = (new Set(this.userNumber)).size;
    const RE = new RegExp(/[1-9]{3}/g);

    if (!RE.test(this.userNumber) || this.userNumber.length !== 3 || IS_UNIQUE !== 3) {
      throw new Error (ERROR.invalidInput);
    };

    this.userNumber =  this.userNumber.split('').map(Number);
    return this.countStrike();
  };

  //컴퓨터의 수와 입력한 값 비교
  countStrike() {
    const STRIKE = [...this.computerNumber].filter((x, idx) => this.userNumber[idx] === x).length;
    const BALL = [...this.computerNumber].filter(x => this.userNumber.includes(x)).length - STRIKE;
    return this.strikeBall(STRIKE,BALL);
  };

  //스트라이크와 볼 개수 출력
  async strikeBall(strike, ball) {
    let answer = '';
    
    if (ball > 0) answer += `${ball}볼 `;
    if (strike > 0) answer += `${strike}스트라이크`;
    if (ball + strike === 0) answer = `낫싱`;
    Console.print(answer)
    
    if (strike !== 3) {
      return this.start();
    };

    const RETRY = await this.userInput.chooseRetry();
    return this.checkRetry(RETRY);
  };

  checkRetry(retryNumber) {
    if (retryNumber !== "1" && retryNumber !== "2") {
      throw new Error (ERROR.retryInput);
    };

    return this.retryOrExit(retryNumber);
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
