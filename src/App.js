import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR_TEXT, GAME_TEXT } from './constants/string.js';

class App {
  constructor() {
    this.computer = this.initComputer();
    this.player = undefined;
  }

  async play() {
    Console.print(GAME_TEXT.START);

    while (true) {
      this.player = await this.getNumber();
      const { strike, ball } = this.getCountObj(this.computer.join(''), this.player);

      Console.print(this.printResult(strike, ball));

      if (strike === 3) {
        Console.print(GAME_TEXT.WIN);
        const choice = await this.getChoice();
        if (Number(choice) === 1) {
          this.computer = this.initComputer();
          continue;
        }
        if (Number(choice) === 2) {
          break;
        }
      }
    }
  }

  initComputer() {
    const computer = [];

    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  async getNumber() {
    try {
      const number = await Console.readLineAsync(GAME_TEXT.INPUT);

      if (number.length !== 3) {
        throw new Error(ERROR_TEXT.print(ERROR_TEXT.NOT_MATCH_LENGTH));
      }
      if (!Number.isInteger(Number(number))) {
        throw new Error(ERROR_TEXT.print(ERROR_TEXT.INVALID_NUMBER));
      }
      if (number.includes('0')) {
        throw new Error(ERROR_TEXT.print(ERROR_TEXT.CONTAIN_ZERO_NUMBER));
      }
      if (Number(number) < 0) {
        throw new Error(ERROR_TEXT.print(ERROR_TEXT.IS_NEGATIVE_NUMBER));
      }
      if (this.checkDuplicateNumber(number)) {
        throw new Error(ERROR_TEXT.print(ERROR_TEXT.DUPLICATE_NUMBER));
      }

      return number;
    } catch (error) {
      throw new Error(error);
    }
  }

  checkDuplicateNumber(number) {
    const isDuplicate = Array(10).fill(false);

    for (let index = 0; index < 3; index++) {
      if (isDuplicate[Number(number[index])]) {
        return true;
      }
      isDuplicate[Number(number[index])] = true;
    }
    return false;
  }

  getCountObj(computer, player) {
    const result = { strike: 0, ball: 0 };

    for (let index = 0; index < 3; index++) {
      if (Number(computer[index]) === Number(player[index])) {
        result.strike++;
      }
    }

    for (let index = 0; index < 3; index++) {
      const getIdx = computer.indexOf(player[index]);
      if (getIdx == -1 || getIdx === index) {
        continue;
      }
      result.ball++;
    }

    return result;
  }

  async getChoice() {
    try {
      const choice = await Console.readLineAsync(GAME_TEXT.CHOICE);

      if (Number(choice) !== 1 && Number(choice) !== 2) {
        throw new Error(ERROR_TEXT.print(ERROR_TEXT.NOT_MATCH_CHOICE));
      }

      return Number(choice);
    } catch (error) {
      throw new Error(error);
    }
  }

  printResult(strike, ball) {
    let result = '';

    if (ball !== 0) {
      result += `${ball}${GAME_TEXT.BALL}`;
    }

    if (strike !== 0) {
      if (result !== '') {
        result += ' ';
      }
      result += `${strike}${GAME_TEXT.STRIKE}`;
    }

    if (result === '') {
      result = GAME_TEXT.NOTHING;
    }

    return result;
  }
}

export default App;
