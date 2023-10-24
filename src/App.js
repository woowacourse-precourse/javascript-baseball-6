import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.computerNumbers();
    await this.start(computer);
  }
  computerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  async start(computer) {
    while (1) {
      const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
      const user = number.split('').map(Number);
      if (user.length !== 3 || number === null || new Set(user).size !== 3) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      if (user.includes(0) || user.includes(NaN)) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      const { strike, ball } = this.hint(user, computer);
      this.displayHint(strike, ball);
      if (strike === 3) {
        Console.print('3스트라이크');
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
    }
    this.replay();
  }
  hint(user, computer) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < computer.length; i++) {
      const index = user.indexOf(computer[i]);
      if (index > -1) {
        if (index === i) {
          strike++;
        } else {
          ball++;
        }
      }
    }
    return { strike, ball };
  }
  displayHint(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else if (ball > 0 && strike === 0) {
      Console.print(`${ball}볼`);
    } else if (strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
  async replay() {
    const replay = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    if (replay === '1') {
      await this.play();
    }
  }
}

const app = new App();
app.play();

export default App;
