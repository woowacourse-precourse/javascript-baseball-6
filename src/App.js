import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from './constants.js';

class App {
  computerNumber;
  userNumber;

  constructor() {
    Console.print(MESSAGE.startMessage);
  };

  async play() {
    this.computerNumber = this.randomGenerator();
    // Console.print(this.computerNumber);
    return this.start()
  };

  async start() {
    this.userNumber = await this.getUserNumber();
    return this.checkInputValidate();
  }

  //랜덤 수 생성
  randomGenerator() {
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const COMPUTER_NUMBER = Random.pickNumberInRange(1, 9);

      if (!COMPUTER.includes(COMPUTER_NUMBER)) {
        COMPUTER.push(COMPUTER_NUMBER);
      };
    };

    return COMPUTER;
  };

  // 사용자 수 입력받기
  async getUserNumber() {
    try {
      const NUMBERS = await Console.readLineAsync(MESSAGE.inputUserNumber);
      return NUMBERS;
    } catch (error) {
      Console.print(error);
    };
  };

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

    const RETRY = await this.chooseRetry();
    return this.checkRetry(RETRY);
  };

  async chooseRetry() {
    try {
      Console.print(MESSAGE.allStrike);
      const RETRY_INPUT_NUMBER = await Console.readLineAsync(MESSAGE.askRetry);
      return RETRY_INPUT_NUMBER;
    } catch (error) {
      Console.print(error);
    };
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
