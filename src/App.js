import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const computerNumber = await this.getComputerNumber();
    await MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const inputNumber = await this.getInputNumber();
    const { strike, ball } = this.getGameResult(computerNumber, inputNumber);
    await this.printGameResult(strike, ball);
  }

  async getComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    
    return computer;
  }

  async getInputNumber() {
    return await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  getGameResult(computerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < inputNumber.length; i++) {
      const computerNumberIndex = computerNumber.indexOf(inputNumber[i]);
      if (i === computerNumberIndex) {
        strike++;
      } else if (computerNumberIndex !== -1) {
        ball++;
      }
    }

    return { strike, ball };
  }

  async printGameResult(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (ball === 0 && strike === 0) {
      MissionUtils.Console.print('낫싱');
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

export default App;
