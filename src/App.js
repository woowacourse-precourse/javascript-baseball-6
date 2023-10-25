import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computer = [];
    this.userInput = [];
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNumbers();
    await this.getUserInput();
  }

  makeRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    this.computer = computer;
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요 : ',
    );
    this.userInput = userInput.split('').map(Number);
  }
}

export default App;
