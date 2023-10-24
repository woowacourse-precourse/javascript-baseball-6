import CONSTANTS from '../assets/constants';

const score = (guesser, answer) => ({
  get strikes() {
    return guesser.filter((num, index) => answer[index] === num).length;
  },

  get balls() {
    return guesser.filter(
      (num, index) => answer[index] !== num && answer.includes(num),
    ).length;
  },

  get nothing() {
    return this.strikes === 0 && this.balls === 0;
  },

  toString() {
    if (this.nothing) return '낫싱';

    let result = '';
    if (this.balls > 0) result += `${this.balls}볼`;
    if (this.strikes > 0 && this.balls > 0) result += CONSTANTS.SPACE;
    if (this.strikes > 0) result += `${this.strikes}스트라이크`;
    return result;
  },

  get win() {
    return this.strikes === 3;
  },
});

export default score;
