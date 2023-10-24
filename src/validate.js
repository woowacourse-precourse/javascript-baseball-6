import { ERROR, GAME } from './constants';

const Validate = {
  inputProperNumbers(numbers) {
    this.inputTrebleFigures(numbers);
    this.inputDifferent(numbers);
    this.inputTypeofNumber(numbers);
  },

  inputTrebleFigures(numbers) {
    if (numbers.length !== 3) throw new Error(ERROR.TREBLE_FIGURES);
  },

  inputDifferent(numbers) {
    const numsArr = numbers.split('');
    const set = new Set([...numsArr]);

    if (numsArr.length !== set.size) throw new Error(ERROR.DIFFERENT_NUMBER);
  },

  inputTypeofNumber(numbers) {
    if (!Number(numbers)) throw new Error(ERROR.TYPE_NUMBER);
  },

  inputProperRegameNumber(number) {
    if (![GAME.REPLAY_NUMBER, GAME.END_NUMBER].includes(number))
      throw new Error(ERROR.REGAME_NUMBER);
  },
};

export default Object.freeze(Validate);
