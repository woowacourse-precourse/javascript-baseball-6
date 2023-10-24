import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.answer = [];
  }

  static generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  static isValidInput(input, restart = false) {
    // 게임 재시작 여부에 대한 입력값 검증
    if (restart) {
      if (input !== '1' && input !== '2') {
        throw new Error(
          '[ERROR] 1 또는 2 외의 값을 입력하여, 게임을 종료합니다!',
        );
      } else {
        return;
      }
    }

    // 숫자야구 게임에 대한 입력값 검증
    if (!Number(input)) {
      throw new Error('[ERROR] 숫자만 입력해주세요!');
    } else if (input.length !== 3) {
      throw new Error('[ERROR] 3자리 숫자를 입력해주세요!');
    } else if (input.includes('0')) {
      throw new Error('[ERROR] 각 자릿수는 1부터 9 사이 숫자여야 합니다!');
    } else if (input.length !== new Set(input.split('')).size) {
      throw new Error('[ERROR] 3자리 숫자는 서로 다른 수로 이루어져야 합니다!');
    }
  }

  static calculateResult(answer, input) {
    let strike = 0;
    let ball = 0;

    input.split('').forEach((string, index) => {
      const number = Number(string);
      if (answer[index] === number) strike += 1;
      else if (answer.includes(number)) ball += 1;
    });

    return { strike, ball };
  }

  static printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else {
      Console.print(
        `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크` : ''}`,
      );
      if (strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      }
    }
  }

  async play() {
    this.answer = App.generateRandomNumber();
    const CONTINUE_FLAG = true;

    Console.print('숫자 야구 게임을 시작합니다.');
    while (CONTINUE_FLAG) {
      // eslint-disable-next-line no-await-in-loop
      const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
      App.isValidInput(input);

      const { strike, ball } = App.calculateResult(this.answer, input);
      App.printResult(strike, ball);

      if (strike === 3) {
        // eslint-disable-next-line no-await-in-loop
        const restart = await Console.readLineAsync(
          '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
        );
        App.isValidInput(restart, true);

        if (restart === '1') {
          this.answer = App.generateRandomNumber();
        } else {
          break;
        }
      }
    }
  }
}

export default App;
