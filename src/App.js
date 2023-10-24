import {Console, Random} from '@woowacourse/mission-utils'
import InputValidation from './InputValidation.js';



class App {
  ERROR_MESSAGE = '[ERROR]';
  PRINT_LABEL = {
    strike: '스트라이크',
    ball: '볼',
    nothing: '낫싱',
  }
  lastGuessNumberAsString = '';
  target = '';


  init() {
    this.target = Array.from({ length: InputValidation.LIMIT.GAME.LENGTH }, () => Random.pickNumberInRange(1, 9)).join('');
  }

  async askForGuessNumber() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    const validation = new InputValidation(input, 'GAME');

    if (!validation.validate()) {
      throw new Error(this.ERROR_MESSAGE);
    }

    this.lastGuessNumberAsString = input;
  }

  getResultForGuessNumber() {
    if (!this.lastGuessNumberAsString || !this.target) return;

    const result = [...this.lastGuessNumberAsString].reduce((acc, token, idx) => {
      if (token === this.target[idx]) {
        acc.strike++;
      } else if (this.target.indexOf(token) !== -1) {
        acc.ball++;
      }
      return acc;
    }, { ball: 0, strike: 0 })

    const resultMessage = Object.entries(result)
      .filter(([_, count]) => count !== 0)
      .map(([type, count]) => `${count}${this.PRINT_LABEL[type]}`)
      .join(' ') || this.PRINT_LABEL.nothing;

    Console.print(resultMessage);

    return result;
  }

  async confirmExit() {
    const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    const validation = new InputValidation(input, 'EXIT');

    if (!validation.validate()) {
      throw new Error(this.ERROR_MESSAGE);
    }

    return input === '2'
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    while (true) {
      this.init();

      while (true) {
        await this.askForGuessNumber();
        const result = this.getResultForGuessNumber();
        if (result.strike === 3) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          break;
        }
      }

      const wantsToExit = await this.confirmExit();
      if (wantsToExit) {
        return;
      }
    }
  }
}

export default App;
