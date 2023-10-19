
import { MissionUtils, Console } from '@woowacourse/mission-utils';

class App {
  constructor(){
    this.computer;
    this.strike;
    this.ball;
  }

  async play() {
    this.initialization();
    Console.print('숫자 야구 게임을 시작합니다.')
    console.log(this.computer)
  }

  initialization () {
    const computer = [];
    while(computer.length < 3){
      const number = MissionUtils.Random.pickNumberInRange(1,9)
      if (!computer.includes(number)) computer.push(number);
    }
    this.computer = computer;
  }
}

export default App;

