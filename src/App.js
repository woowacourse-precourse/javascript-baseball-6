import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor(user_number, computer_number) {
    this.user_number = user_number;
    this.computer_number = computer_number;
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async getInput() {
    try {
      const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
      this.inputCheck(input);
      this.computeNumber();
    } catch (error) {
      console.error(error);
    }
  }

  inputCheck(input) {
    // 세자리 숫자
    if (input.length !== 3) {
      throw new Error('3자리가 아님');
    }
    const number = input.split('').map(Number);
    const user = [];
    number.forEach(element => {
      if (!user.includes(element)) {
        user.push(element);
      } else {
        throw new Error('서로 다른 수가 아님');
      }
    });
    this.user_number = user;
  }

  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const computer_num = Random.pickNumberInRange(1,9);
      if (!computer.includes(computer_num)) {
        computer.push(computer_num);
      }
    }
    this.computer_number = computer;
  }

  computeNumber() {
    const user = this.user_number;
    const computer = this.computer_number;
    let ball = 0;
    let strike = 0;
    for (let i = 0, j = 0; i < 3, j < 3; i++, j++) {
      if (user.includes(computer[j])) {
        if (user[i] === computer[j]) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    }
    if (ball > 0) {
      if (strike > 0) {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      } else {
        Console.print(`${ball}볼`);
      }
    } else if (strike > 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print('낫싱');
    }

    if (strike === 3) {
      this.checkRestart();
    } else {
      this.getInput();
    }
  }

  async checkRestart() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    try {
      const input = await Console.readLineAsync('');
      if (input === 1) {
        this.getRandomNumber();
        this.getInput();
      } else if (input === 2) {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async play() {
    this.start();
    this.getRandomNumber();
    await this.getInput();
  }
}

export default App;

// const app = new App();
// app.play();
