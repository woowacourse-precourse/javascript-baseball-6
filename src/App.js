import {Console, MissionUtils, Random} from '@woowacourse/mission-utils';

class App {
  async play() {

    //1. 컴퓨터 숫자 저장
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    //2. 3자리 숫자 입력
    const mynumber = await Console.readLineAsync("숫자를 입력해주세요 : ");
    Console.print(mynumber);
  }
}


export default App;
