import { Console } from '@woowacourse/mission-utils';
import generateRandomNum from './generateRandomNum';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const GENERATED_RANDOM_NUM = generateRandomNum();
  }
}

export default App;