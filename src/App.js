import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const COMPUTER_GENERATED_NUM = [];

    while (COMPUTER_GENERATED_NUM.length < 3) {
      const RANDOM_SINGLE_NUM = Random.pickNumberInRange(1, 9);
      
      if (!COMPUTER_GENERATED_NUM.includes(RANDOM_SINGLE_NUM)) {
        COMPUTER_GENERATED_NUM.push(RANDOM_SINGLE_NUM);
      }
    }
  }
}

export default App;