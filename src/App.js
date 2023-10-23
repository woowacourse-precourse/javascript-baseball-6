import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    let IS_PLAYING = false;
    Console.print('숫자 야구 게임을 시작합니다');
    
    try {
      let computer = this.computerPicksNumber();
      IS_PLAYING = true;

      while (IS_PLAYING) {
        let userInput = await this.getUserInput();

        this.calculateBallAndStrike(computer, userInput);
      }
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  async getUserInput() {
    return Console.readLineAsync('숫자를 입력해주세요 : ');
  }

  computerPicksNumber() {
    const computerPickArr = [];

    while (computerPickArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerPickArr.includes(number)) {
        computerPickArr.push(number);
      }
    }

    const computerPick = computerPickArr.join('');
    return computerPick;
  }

  calculateBallAndStrike(computer, userInput) {
    const computerDigits = computer.split('');
    const userDigits = userInput.split('');

    for (let i = 0; i < 3; i++) {
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
}

const app = new App();
app.play();

export default App;