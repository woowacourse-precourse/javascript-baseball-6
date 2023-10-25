import { Console, Random } from '@woowacourse/mission-utils';

class App {
  /* game start */
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const ANSWER = this.setNumber();
    while (this.STRIKE < 3) {
      const USER_INPUT = await this.inputUserNumber();
      this.checkNumber(ANSWER, USER_INPUT);
      this.getHint();
    }
    const CHOICE = await this.inputReplay();
    if (CHOICE) {
      const app = new App();
      app.play();
    } else {
      /* exit game */
      return;
    }
  }

  constructor() {
    this.STRIKE = 0;
    this.BALL = 0;
  }

  /* create random computer number */
  setNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER.join('');
  }

  /* handle user input and check if input is appropriate */
  async inputUserNumber() {
    const USER_NUMBER = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (USER_NUMBER.match(/\D/)) {
      throw new Error('ERROR] : 숫자만 입력해 주세요.');
    }
    if (USER_NUMBER.length !== 3) {
      throw new Error('[ERROR] : 3자리 숫자를 입력해주세요.');
    }
    Console.print(USER_NUMBER);
    return USER_NUMBER;
  }

  /* compare userinput and answer to count strike and ball */
  checkNumber(answer, userinput) {
    let COUNT = { STRIKE: 0, BALL: 0 };
    const SPLIT_USERINPUT = userinput.split('');

    SPLIT_USERINPUT.forEach((n, idx) => {
      if (answer.indexOf(n) == idx) {
        COUNT.STRIKE += 1;
      } else if (answer.includes(n)) {
        COUNT.BALL += 1;
      }
    });
    this.STRIKE = COUNT.STRIKE;
    this.BALL = COUNT.BALL;
  }

  /* give hint about how many numbers correct */
  getHint() {
    if (this.STRIKE == 3) {
      return;
    }
    let HINTTEXT = '';
    if (this.BALL == 0 && this.STRIKE == 0) {
      HINTTEXT = '낫싱';
    } else if (this.STRIKE > 0 && this.BALL > 0) {
      HINTTEXT = `${this.BALL}볼 ${this.STRIKE}스트라이크`;
    } else if (this.BALL > 0) {
      HINTTEXT = `${this.BALL}볼`;
    } else if (this.STRIKE > 0) {
      HINTTEXT = `${this.STRIKE}스트라이크`;
    }
    return Console.print(HINTTEXT);
  }

  /* ask about replay to user if the user enter '1' return true or enter '2' false */
  async inputReplay() {
    Console.print(`${this.STRIKE}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    const CHOICE = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    if (CHOICE !== '1' && CHOICE !== '2') {
      throw new Error('[ERROR] : 1과 2중 하나만 입력해주세요.');
    }
    return CHOICE === '1' ? true : false;
  }
}

export default App;
