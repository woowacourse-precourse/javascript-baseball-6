import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const computerNumber = this.getComputerNumber();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const inputNumber = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  getComputerNumber() {
    const computerNumber = new Set();

    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      computerNumber.add(number);
    }

    return computerNumber;
  }
}

export default App;
