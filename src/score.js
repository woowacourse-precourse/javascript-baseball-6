import { CONSTANTS } from './constants';

class Score {
  constructor(guesser, answer) {
    this.guesser = guesser;
    this.answer = answer;
  }

  strikes() {
    return this.guesser.filter((num, index) => this.answer[index] === num).length;
  }

  balls() {
    return this.guesser.filter(
      (num, index) => this.answer[index] !== num && this.answer.includes(num),
    ).length;
  }

  nothing() {
    return this.strikes() === 0 && this.balls() === 0;
  }

  toString() {
    if (this.nothing()) return '낫싱';

    let result = '';
    if (this.balls() > 0) result += `${this.balls()}볼`;
    if (this.strikes() > 0 && this.balls() > 0) result += ' ';
    if (this.strikes() > 0) result += `${this.strikes()}스트라이크`;
    return result;
  }

  win() {
    return this.strikes() === CONSTANTS.MAX_INPUT_SIZE;
  }
}

export default Score;
