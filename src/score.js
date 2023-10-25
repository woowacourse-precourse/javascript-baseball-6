import { MAX_INPUT_SIZE } from './constants';

class Score {
  constructor(guesser, answer) {
    this.guesser = guesser;
    this.answer = answer;
  }

  getStrikeCount() {
    return this.guesser.filter((num, index) => this.answer[index] === num).length;
  }

  getBallCount() {
    return this.guesser.filter(
      (num, index) => this.answer[index] !== num && this.answer.includes(num),
    ).length;
  }

  isNothing() {
    return this.getStrikeCount() === 0 && this.getBallCount() === 0;
  }

  toString() {
    if (this.isNothing()) return '낫싱';

    let result = '';
    if (this.getBallCount() > 0) result += `${this.getBallCount()}볼`;
    if (this.getStrikeCount() > 0 && this.getStrikeCount() > 0) result += ' ';
    if (this.getStrikeCount() > 0) result += `${this.getStrikeCount()}스트라이크`;

    return result;
  }

  isWin() {
    return this.getStrikeCount() === MAX_INPUT_SIZE;
  }
}

export default Score;
