import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 랜덤 값 생성하기
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    const random = computer.join('');
    return random;
  }
}

export default App;
