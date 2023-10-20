import GameUtil from './Util';
import { Console } from '@woowacourse/mission-utils';

class App extends GameUtil {
  constructor() {
    super();
    this.init();
  }
  init() {
    this.randomNumber = super.generateRandomNumber();
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    const RESULT = Console.readLineAsync('숫자를 입력해주세요 : ');
    if (RESULT !== 3 || RESULT.includes('0')) {
      throw new Error(RESULT);
    }
  }
}

export default App;
