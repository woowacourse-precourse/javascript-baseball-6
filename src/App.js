import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    let computer = this.makeRamdomNumber();
    let input = [];
    let isSame = false;
    let executeCondition = '';

    this.notifyGameStart();
    while (1) {
      if (isSame === true) {
        computer = this.makeRamdomNumber();
        executeCondition = await this.notifyGameEnd();
        if (executeCondition === '1') {
          isSame = false;
        } else if (executeCondition === '2') {
          return;
        } else {
          throw new Error("[ERROR] 게임 실행 조건을 잘못 입력하셨습니다.");
        }
      }
      input = await this.getUserNumber();
      isSame = this.compareUserAndRamdomNumber(input, computer);
    }
  }

  notifyGameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  makeRamdomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  async getUserNumber() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    
    if (!/^[1-9]{3}$/.test(Number(input)))
      throw new Error('[ERROR] 입력한 숫자가 잘못된 형식입니다.');

    const inputSet = new Set(input.split('').map((digit) => Number(digit)));
    if (input.length !== inputSet.size)
      throw new Error('[ERROR] 입력한 숫자에 중복된 숫자가 있습니다.');

    return input.split('').map((digit) => Number(digit));
  }

  compareUserAndRamdomNumber(input, computer) {
    if (input.join("") === computer.join("")) {
      return true;
    }

    let strike = 0;
    let ball = 0;

    computer.forEach((number, index) => {
      if (number === input[index]) {
        strike += 1;
      }
    });

    ball = computer.filter((number) => input.includes(number)).length;
    ball -= strike;

    if (strike !== 0 && ball !== 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      return false;
    }
    if (strike !== 0) {
      Console.print(`${strike}스트라이크`);
      return false;
    }
    if (ball !== 0) {
      Console.print(`${ball}볼`);
      return false;
    }
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
      return false;
    }
  }

  async notifyGameEnd() {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    return await Console.readLineAsync('');
  }
}

//const app = new App();
//app.play();

export default App;
