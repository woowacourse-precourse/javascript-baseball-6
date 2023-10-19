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

  inputProperResetNumber(number) {
    if (!['1', '2'].includes(number))
      throw new Error('[ERROR] 재시작하려면 1, 종료하려면 2를 입력하셔야 합니다.');
  },
};

export default Validate;
