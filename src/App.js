import { MissionUtils, Console } from '@woowacourse/mission-utils';

const MINIMUMNUMBER = 1;
const MAXIMUMNUMBER = 9;
const MESSAGE = {
  Start: '숫자 야구 게임을 시작합니다.',
};
class App {
  constructor() {
    this.computerHasNumber = [];
  }
  async play() {
    Console.print(MESSAGE.Start);
    this.setComputerHasNumber();
  }

  setComputerHasNumber() {
    while (this.computerHasNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(
        MINIMUMNUMBER,
        MAXIMUMNUMBER
      );
      if (!this.computerHasNumber.includes(number)) {
        this.computerHasNumber.push(number);
      }
    }
  }
}

export default App;
