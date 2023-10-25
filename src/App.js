import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { userInput } from './utils';

class App {
  constructor() {
    this.user = [];
    this.computer = [];
    this.strike = 0;
    this.ball = 0;
  }

  #initComputer() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  #initStrikeAndBall() {
    this.strike = 0;
    this.ball = 0;
  }

  async #userInputInsertValue() {
    const input = await userInput('숫자를 입력해주세요 : ');
    this.user = [];
    if (input.length !== 3) {
      throw new Error('[ERROR] Input value is not 3 characters');
    }
    for (let i = 0; i < input.length; i += 1) {
      if (input[i] < '1' || input[i] > '9') {
        throw new Error('[ERROR] Input value is out of range');
      }
      if (!this.user.includes(Number(input[i]))) {
        this.user.push(Number(input[i]));
      } else {
        throw new Error('[ERROR] Same value within the input');
      }
    }
  }

  #compareUserAndComputer() {
    for (let i = 0; i < this.computer.length; i += 1) {
      if (this.user[i] === this.computer[i]) {
        this.strike += 1;
      } else if (this.computer.includes(this.user[i])) {
        this.ball += 1;
      }
    }
  }

  #compareResultPrint() {
    let result = this.ball ? `${this.ball}볼` : '';
    if (result !== '') {
      result += ' ';
    }
    result += this.strike ? `${this.strike}스트라이크` : '';
    if (result === '') {
      result = '낫싱';
    }
    Console.print(result);
  }

  async #regmaeInput() {
    const regame = await userInput('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (regame !== '2' && regame !== '1') {
      throw new Error('[ERROR] Input value is out of range');
    }
    return regame;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      this.#initComputer();
      while (true) {
        await this.#userInputInsertValue();
        this.#initStrikeAndBall();
        this.#compareUserAndComputer();
        this.#compareResultPrint();
        if (this.strike === 3) {
          break;
        }
      }
      if (await this.#regmaeInput() === '2') {
        Console.print('게임 종료');
        break;
      }
    }
  }
}

export default App;
