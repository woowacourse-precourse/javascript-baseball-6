import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.constans.js';

class App {
  constructor() {
    this.matchNumber = 0; // 사용자가 맞추어야 할 숫자
  }

  /**
   * 시작 문구를 출력해주는 메서드
   */
  startPhrase() {
    console.log(MESSAGE.start);
  }

  /**
   * 사용자가 맞추어야 할 숫자를 세팅하는 메서드
   */
  setMatchNumber() {
    const computer = [];
    // 3자리 숫자를 세팅
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.matchNumber = computer.join('');
  }

  readyGame() {
    this.startPhrase();
    this.setMatchNumber();
  }

  async play() {
    this.readyGame();
  }
}

export default App;
