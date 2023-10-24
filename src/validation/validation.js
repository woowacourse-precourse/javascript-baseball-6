const MESSAGE = Object.freeze({
  invalid_type: '[ERROR]',
  invalid_size: '[ERROR]',
  invalid_range: '[ERROR]',
  invalid_duplication: '[ERROR]',
  invalid_one_or_two: '[ERROR]',
});

const validation = {
  checkCorrectMainNumber(input) {
    input.forEach(number => {
      if (Number.isNaN(number)) throw new Error(MESSAGE.invalid_type);
    });
  },

  checkCorrectMainNumbersize(input) {
    if (input.length !== 3) throw new Error(MESSAGE.invalid_size);
  },

  checkCorrectMainNumberRange(input) {
    input.forEach(number => {
      if (number < 1 || number > 9) throw new Error(MESSAGE.invalid_range);
    });
  },

  checkDuplicationMainNumber(input) {
    const setInput = new Set(input);
    if (setInput.size !== 3) throw new Error(MESSAGE.invalid_duplication);
  },

  checkOneOrTwo(input) {
    if (!(input === '1' || input === '2')) throw new Error(MESSAGE.invalid_one_or_two);
  },
};

export default validation;
