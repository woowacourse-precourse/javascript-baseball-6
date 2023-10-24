import { Console } from '@woowacourse/mission-utils';
import Util from './Util.js';

class App extends Util {
  constructor() {
    super();
    this.msg = {
      ...this.msg,
      start: '숫자 야구 게임을 시작합니다.',
      input: '숫자를 입력해주세요 : ',
      end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      select: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    };
    Console.print(this.msg.start);
    this.computer = this.createComputer();
  }

  async play() {
    const GUESS_ANS = await Console.readLineAsync(this.msg.input);
    const STRIKE = this.validateNumber(GUESS_ANS);
    if (STRIKE === 3) {
      Console.print(this.msg.end);
      const END_ANS = await Console.readLineAsync(this.msg.select);
      this.endGame(END_ANS);
    } else {
      return this.play();
    }
  }

  endGame(answer) {
    if (answer === '1') {
      this.computer = this.createComputer();
      return this.play();
    } else if (answer !== '2') {
      throw new Error(this.msg.error);
    }
    return;
  }
}

const APP = new App();
APP.play();

export default App;
