import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answerNumbers = [];
    this.initializeAnswerNumbers();
  }

  initializeAnswerNumbers() {
    this.answerNumbers = [];
    while (this.answerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answerNumbers.includes(number)) {
        this.answerNumbers.push(number);
      }
    }
  }

  async getUserInput() {
    let numbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (this.checkValidInput(numbers)) {
      return numbers.split('').map(Number);
    }
  }

  checkValidInput(value) {
    if (isNaN(value) || value.length !== 3) {
      throw new Error('잘못된 입력입니다.');
    }

    value = value.split('').map(Number);
    if (
      value[0] === value[1] ||
      value[1] === value[2] ||
      value[2] === value[0] ||
      value[0] === 0 ||
      value[1] === 0 ||
      value[2] === 0
    ) {
      throw new Error('잘못된 입력입니다.');
    }

    return true;
  }

  compareNumber(computer, user) {
    let result = { strike: 0, ball: 0 };
    for (let i = 0; i <= 2; i++) {
      if (computer.includes(user[i])) {
        result.ball++;
      }

      if (computer[i] === user[i]) {
        result.ball--;
        result.strike++;
      }
    }
    return result;
  }

  printResult(result) {
    const { strike, ball } = result;
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    if (strike === 3) {
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      return true;
    }

    return false;
  }

  async checkDoAgain() {
    Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
    const doAgain = await Console.readLineAsync('');

    if (doAgain === '1') return true;
    return false;
  }

  async play() {
    let continueGame = true;
    while (continueGame) {
      this.initializeAnswerNumbers();
      // Console.print('숫자 야구 게임을 시작합니다.');
      console.log(this.answerNumbers);

      let isCorrect = false;

      while (!isCorrect) {
        const userNumber = await this.getUserInput();
        isCorrect = this.printResult(
          this.compareNumber(this.answerNumbers, userNumber)
        );
      }
      continueGame = await this.checkDoAgain();
    }
    Console.print('게임이 종료되었습니다.');
  }
}

const app = new App();
app.play();

export default App;
