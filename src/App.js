import { Console } from '@woowacourse/mission-utils';
import BaseballGame from './BaseballGame.js';
import { MESSAGE } from './Constants.js';

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  // 시작 메시지 출력 후 게임 시작
  async play() {
    Console.print(MESSAGE.START);
    this.start();
  }

  // 숫자야구 게임 시작
  start() {
    this.baseballGame.start();
    this.readAnswer();
  }

  // 사용자로부터 예상 정답을 입력 받고 유효성 검사
  async readAnswer() {
    const answer = await Console.readLineAsync(MESSAGE.INPUT);
    try {
      BaseballGame.validateNumber(answer);
      this.printResult(answer);
    } catch (err) {
      Console.print(err);
    }
  }

  // ball, strike 수에 맞는 출력 메세지 반환
  getResultMessage(ball, strike) {
    if (ball == 0 && strike == 0) return MESSAGE.NOTHING;
    if (ball > 0 && strike == 0) return `${ball}${MESSAGE.BALL}`;
    if (ball == 0 && strike > 0) return `${strike}${MESSAGE.STRIKE}`;
    
    return `${ball}${MESSAGE.BALL} ${strike}${MESSAGE.STRIKE}`;
  }

  // 사용자가 입력한 숫자에 대한 결과 출력 후 판별
  printResult(answer) {
    const { ball, strike } = this.baseballGame.getResult(answer);

    if (strike == 3) {
      Console.print(MESSAGE.SUCCESS);
      this.readRetry();
      return;
    }

    Console.print(this.getResultMessage(ball, strike));
    this.readAnswer();
  }

  // 게임 재시작 여부 입력 받기
  async readRetry() {
    const answer = await Console.readLineAsync(MESSAGE.RETRY);
    if (answer == 1) {
      this.start();
      return;
    }

    if (answer != 2) {
      Console.print(MESSAGE.INVALID_RETRY_ANSWER);
    }
  }
}

new App().play();

export default App;
