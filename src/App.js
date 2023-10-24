import { Console, Random } from '@woowacourse/mission-utils';

const MAX_DIGITS = 3;

class App {
  async play() {
    let IS_PLAYING = true;
    let computer = this.computerPicksNumber();

    this.init();
    Console.print('숫자 야구 게임을 시작합니다');

    while (IS_PLAYING) {
      let userInput = await this.getUserInput();

      if (!this.validation(userInput)) {
        throw new Error('[ERROR]');
      }

      this.calculateBallAndStrike(computer, userInput);

      if (+computer === +userInput) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        let userChoice = await this.getUserChoice();
        IS_PLAYING = this.restartOrEnd(userChoice);
        if (IS_PLAYING) {
          computer = this.computerPicksNumber();
        }
      }
    }
  }

  async getUserInput() {
    return Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  async getUserChoice() {
    return Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
  }

  computerPicksNumber() {
    const computerPickArr = [];
    while (computerPickArr.length < MAX_DIGITS) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerPickArr.includes(number)) {
        computerPickArr.push(number);
      }
    }
    const computerPick = computerPickArr.join('');
    
    return computerPick;
  }

  restartOrEnd(userChoice) {
    switch (userChoice) {
      case '1':
        return true;
      case '2':
        return false;
      default:
        throw new Error('[ERROR] 잘못된 입력입니다. 1 또는 2를 입력하세요.');
    }
  }

  calculateBallAndStrike(computer, userInput) {
    const computerDigits = computer.split('');
    const userDigits = userInput.split('');

    for (let i = 0; i < MAX_DIGITS; i++) {
      if (computerDigits[i] === userDigits[i]) {
        this.strike++;
      } else if (computer.includes(userDigits[i])) {
        this.ball++;
      }
    }
    this.printResult();
  }

  printResult() {
    let result = '';

    if (this.ball > 0) {
      result += `${this.ball}볼`;
    }
    if (this.strike > 0 && this.ball > 0) {
      result += ' ';
    }
    if (this.strike > 0) {
      result += `${this.strike}스트라이크`;
    }
    Console.print(result || '낫싱');
    this.init();
  }

  init() {
    this.ball = 0;
    this.strike = 0;
  }

  validation(input) {
    if (input.length !== MAX_DIGITS) {
      return false;
    }
    if (new Set(input).size !== MAX_DIGITS) {
      return false;
    }
    if (Number.isNaN(Number(input))) {
      return false;
    }
    if (input.includes(0)) {
      return false;
    }

    return true;
  }
}

export default App;