import { Console } from '@woowacourse/mission-utils';
import printMsg from '../utils/printMsg.js';
import BaseBallGame from './baseBallGame.js';

class App {
  constructor() {
    this.methods = BaseBallGame;
    this.isPlaying = false;
  }

  async play() {
    const computer = this.methods.getRandomArray(); // 사용자가 맞추어야 할 숫자
    this.isPlaying = true; // 게임 시작
    printMsg('숫자 야구 게임을 시작합니다.');

    // 종료될 때까지 계속 반복
    while (this.isPlaying) {
      const inputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');

      // 입력이 유효한 경우에만
      if (this.methods.checkValidInput(inputNumber)) {
        this.methods.printHint(
          this.methods.getBallAndStrikeCount(computer, inputNumber),
        );
      }
    }
  }
}

export default App;
