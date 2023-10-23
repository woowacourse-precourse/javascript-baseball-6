import { MissionUtils } from "@woowacourse/mission-utils";

class App {

  constructor() {
    // 컴퓨터는 1부터 9까지 서로 다른 임의의 수 3개를 선택한다.
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  async play() {
    try {
      this.number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    } catch (error) {
      // reject 되는 경우
      console.log('error:', error);
    }
  }
}


export default App;
