import { GAME } from './constants';

const Validate = {
  inputProperNumbers(numbers) {
    this.inputTrebleFigures(numbers);
    this.inputDifferent(numbers);
    this.inputTypeofNumber(numbers);
  },

  inputTrebleFigures(numbers) {
    if (numbers.length !== 3) throw new Error('[ERROR] 세자리 수가 아닙니다.');
  },

  inputDifferent(numbers) {
    const numsArr = numbers.split('');
    const set = new Set([...numsArr]);

    if (numsArr.length !== set.size) throw new Error('[ERROR] 중복되는 숫자가 있으면 안됩니다.');
  },

  inputTypeofNumber(numbers) {
    if (!Number(numbers)) throw new Error('[ERROR] 숫자를 입력하셔야 합니다.');
  },

  inputProperRegameNumber(number) {
    if (![GAME.REPLAY, GAME.END].includes(number))
      throw new Error(
        `[ERROR] 재시작하려면 ${GAME.REPLAY}, 종료하려면 ${GAME.END}를 입력하셔야 합니다.`,
      );
  },
};

export default Validate;
