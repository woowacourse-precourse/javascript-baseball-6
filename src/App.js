import { MissionUtils, Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    let End = false;

    while (End != true) {
      const computer = this.creatingComputer();
      console.log(computer);
      while (true) {
        const userNumbers = await this.promptUserInput();
        const result = this.calculateResult(computer, userNumbers);
        Console.print(result);

        if (result === '3스트라이크') {
          console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        }
      }

      End = await this.promptGameEndChoice();
    }
  }

  creatingComputer() {
    const arr = [];
    while (arr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!arr.includes(number)) {
        arr.push(number);
      }
    }
    return arr;
  }

  async promptUserInput() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (!this.isInputValid(userInput)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    return userInput.split('').map(Number);
  }

  calculateResult(computer, userNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computer[i] === userNumbers[i]) {
        strike++;
      } else if (computer.includes(userNumbers[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      return '낫싱';
    }

    const result = [];
    if (ball > 0) {
      result.push(`${ball}볼`);
    }
    if (strike > 0) {
      result.push(`${strike}스트라이크`);
    }

    return result.join(' ');
  }

  async promptGameEndChoice() {
    console.log('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const choice = await Console.readLineAsync('');
    if (choice !== '1' && choice !== '2') {
      throw new Error('[ERROR] 올바른 선택이 아닙니다.');
    }
    return choice === '2';
  }

  isInputValid(userInput) {
    return /^\d{3}$/.test(userInput);
  }
}

export default App;

const app = new App();
app.play();
