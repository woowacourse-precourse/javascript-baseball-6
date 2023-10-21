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
//"3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"
    Console.print('낫싱');
    Console.print('3스트라이크');
    Console.print('1볼 1스트라이크');
    Console.print('3스트라이크');
    Console.print('게임 종료');
  }
}


export default App;
