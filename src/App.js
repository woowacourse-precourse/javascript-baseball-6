import { Console } from '@woowacourse/mission-utils';
import generateRandomNum from './generateRandomNum';
import startGame from './startGame';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const GENERATED_RANDOM_NUM = generateRandomNum();

    startGame(GENERATED_RANDOM_NUM);
  }
}

export default App;