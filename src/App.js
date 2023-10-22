import { Console } from '@woowacourse/mission-utils';
import getRandomArray from '../utils/getRandomArray.js';
import printMsg from '../utils/printMsg.js';

class App {
  constructor() {
    this.computer = getRandomArray(); // 사용자가 맞추어야 할 숫자
    this.isPlaying = false;
  }

  async play() {
    printMsg('숫자 야구 게임을 시작합니다.');
    this.isPlaying = true; // 게임 시작

    while (this.isPlaying) {
      await Console.readLineAsync('숫자를 입력해주세요 : ');
    }
  }
}

export default App;
