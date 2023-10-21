import {Console, MissionUtils, Random} from '@woowacourse/mission-utils';

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    Console.print(computer); //[1, 3, 5] 출력
  }
}


export default App;
