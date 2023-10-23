import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    let computerNumber = await this.getComputerNumber();
    let userAnswer = 1;

    await MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    while (userAnswer === 1) {
      const inputNumber = await this.getInputNumber();
      const { strike, ball } = this.getGameResult(computerNumber, inputNumber);
      await this.printGameResult(strike, ball);

      if (strike === 3) {
        userAnswer = this.getInputContinueNumber();

        if (userAnswer === 1) {
          computerNumber = await this.getComputerNumber();
        }
      }
    }
  }

  async getComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = await MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    
    return computer;
  }

  async getInputNumber() {
    const inputNumber = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    
    if (inputNumber.length > 3) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    if (isNaN(inputNumber)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return inputNumber;
  }

  async getInputContinueNumber() {
    await MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const inputNumber = await MissionUtils.Console.readLineAsync();

    if (inputNumber === '1' || inputNumber === '2') {
      return Number(inputNumber);
    }

    throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  getGameResult(computerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < inputNumber.length; i++) {
      const computerNumberIndex = computerNumber.indexOf(Number(inputNumber[i]));
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
      await MissionUtils.Console.print('3스트라이크');
      await MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (ball === 0 && strike === 0) {
      await MissionUtils.Console.print('낫싱');
    } else {
      await MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

export default App;
