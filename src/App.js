import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    while (true) {
      Console.print('숫자 야구 게임을 시작합니다.');
      await this.startGame();
      if ((await this.askToRestartGame()) === '2') {
        Console.print('게임 종료');
        break;
      }
    }
  }

  async askToRestartGame() {
    await Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    return await Console.readLineAsync('');
  }

  async startGame() {
    const numberInfoMap = new Map([
      ['strike', 0],
      ['ball', 0],
    ]);
    const computer = this.generateRandomNumber();
    while (numberInfoMap.get('strike') !== 3) {
      const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if (!this.isValidUserInput(userInput)) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      this.calculateNumberInfo(userInput, computer, numberInfoMap);
      this.printGameResult(numberInfoMap);
    }
    await Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  async printGameResult(numberInfoMap) {
    const strike = numberInfoMap.get('strike');
    const ball = numberInfoMap.get('ball');
    if (strike === 0 && ball === 0) {
      await Console.print('낫싱');
    } else if (strike > 0 && ball === 0) {
      await Console.print(`${strike}스트라이크`);
    } else if (strike === 0 && ball > 0) {
      await Console.print(`${ball}볼`);
    } else {
      await Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    numberInfoMap.set('strike', 0);
    numberInfoMap.set('ball', 0);
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  isValidUserInput(input) {
    if (input.length !== 3) return false;
    if (input.length !== new Set(input).size) return false;
    for (let i = 0; i < input.length; i++) {
      const num = parseInt(input[i]);
      if (isNaN(num) || num < 1 || num > 9) {
        return false;
      }
    }
    return true;
  }

  calculateNumberInfo(userInput, computer, numberInfoMap) {
    for (let i = 0; i < 3; i++) {
      const userInputNum = parseInt(userInput[i]);
      if (computer[i] === userInputNum) {
        numberInfoMap.set('strike', numberInfoMap.get('strike') + 1);
      } else if (computer.includes(userInputNum)) {
        numberInfoMap.set('ball', numberInfoMap.get('ball') + 1);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
