import { Console, MissionUtils } from '@woowacourse/mission-utils';

import { message, NUM_LOWER_LIMIT, NUM_UPPER_LIMIT } from './Constants.js';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async generateNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(NUM_LOWER_LIMIT, NUM_UPPER_LIMIT);
      if (!numbers.includes(newNumber)) numbers.push(newNumber);
    }
    Console.print(numbers);
  }
}

const app = new App();
app.play();
export default App;
