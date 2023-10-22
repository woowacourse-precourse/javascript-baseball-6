import { Console, MissionUtils } from '@woowacourse/mission-utils';
class User {
  constructor(numbers) {
    this.numbers = numbers;
  }
  setRandomNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.numbers = numbers;
  }
  async setInputNumbers() {
    const strNumbers = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const numbers = [];
    try {
      if (strNumbers.length !== 3) {
        throw new Error('[ERROR] 3자리 숫자를 입력해주세요');
      }
      strNumbers.split('').map((strNumber) => {
        const number = Number(strNumber);
        if (Number.isNaN(number)) {
          throw new Error('[ERROR] 숫자를 입력해주세요');
        } else if (numbers.includes(number)) {
          throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요');
        } else {
          numbers.push(number);
        }
      });
      this.numbers = numbers;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
class App extends User {
  async play() {
    const computer = new User();
    const user = new User();
    Console.print('숫자야구게임을 시작합니다.');
    computer.setRandomNumber();
    while (true) {
      await user.setInputNumbers();
      if (user.numbers.length < 3) break;
      const { strike, ball } = this.compareNumbers(computer, user);
      if (strike === 3) {
        Console.print(`${strike}스트라이크`);
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const choose = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        if (this.restart(Number(choose))) computer.setRandomNumber();
        else break;
      } else if (strike === 0 && ball === 0) {
        Console.print('낫싱');
      } else {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    }
  }
  restart(number) {
    try {
      if (number !== 1 && number !== 2) {
        throw new Error('[ERROR] 1 또는 2를 입력해주세요');
      }
      if (number === 1) return true;
      return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  compareNumbers(computer, user) {
    const initial = {
      strike: 0,
      ball: 0,
    };
    const { strike, ball } = computer.numbers.reduce(({ strike, ball }, number, index) => {
      if (user.numbers[index] === number) {
        strike += 1;
      } else if (user.numbers.includes(number)) {
        ball += 1;
      }
      return { strike, ball };
    }, initial);
    return { strike, ball };
  }
}
export default App;
