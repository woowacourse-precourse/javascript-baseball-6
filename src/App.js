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
    await this.start();
  }

  // 숫자야구 게임 시작
  async start() {
    this.baseballGame.start();
    await this.readAnswer();
  }

  // 사용자로부터 예상 정답을 입력 받고 유효성 검사
  async readAnswer() {
    const answer = await Console.readLineAsync(MESSAGE.INPUT);
    BaseballGame.validateNumber(answer);
    await this.printResult(answer);
  }

  // ball, strike 수에 맞는 출력 메세지 반환
  getResultMessage(ball, strike) {
    if (ball == 0 && strike == 0) return MESSAGE.NOTHING;
    
    return `${ball > 0 ? ball + MESSAGE.BALL + ' ' : ''}${strike > 0 ? strike + MESSAGE.STRIKE : ''}`.trim();
  }

  // 사용자가 입력한 숫자에 대한 결과 출력 후 판별
  async printResult(answer) {
    const { ball, strike } = this.baseballGame.getResult(answer);

    Console.print(this.getResultMessage(ball, strike));

    if (strike == 3) {
      Console.print(MESSAGE.SUCCESS);
      await this.readRetry();
      return;
    }
    
    await this.readAnswer();
  }

  // 게임 재시작 여부 입력 받기
  async readRetry() {
    const answer = await Console.readLineAsync(MESSAGE.RETRY);
    if (answer == 1) {
      this.start();
      return;
    }

    if (answer != 2) {
      throw new Error(MESSAGE.INVALID_RETRY_ANSWER);
    }
  }
}

export default App;
