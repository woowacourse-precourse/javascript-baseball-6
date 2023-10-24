import { Console } from '@woowacourse/mission-utils';
import { END, NUMBER_LENGTH, START } from './constants.js';
import { User } from './User.js';

class App extends User {
  async play() {
    Console.print('숫자야구게임을 시작합니다.');
    const computer = new User();
    const user = new User();
    computer.setRandomNumbers();
    while (true) {
      await user.setInputNumbers();
      const { strike, ball } = this.getResult(computer, user);
      this.printResult({ strike, ball });
      if (strike === NUMBER_LENGTH) {
        if (await this.restart()) computer.setRandomNumbers();
        else break;
      }
    }
  }
  async restart() {
    let number = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    number = Number(number);
    if (number === START) return true;
    else if (number === END) return false;
    else throw new Error('[ERROR] 1 또는 2를 입력해주세요');
  }
  getResult(computer, user) {
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
  printResult({ strike, ball }) {
    if (strike === NUMBER_LENGTH) {
      Console.print(`${strike}스트라이크`);
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

export default App;
