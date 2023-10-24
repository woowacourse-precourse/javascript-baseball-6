import ERROR from '../constant/ERROR.js';

const validation = {
  checkCorrectMainNumber(input) {
    input.forEach(number => {
      if (Number.isNaN(number)) {
        throw new Error(ERROR.invalid_type);
      }
    });
  },

  checkCorrectMainNumbersize(input) {
    if (input.length !== 3) {
      throw new Error(ERROR.invalid_size);
    }
  },

  checkCorrectMainNumberRange(input) {
    input.forEach(number => {
      if (number < 1 || number > 9) {
        throw new Error(ERROR.invalid_range);
      }
    });
  },

  checkDuplicationMainNumber(input) {
    const setInput = new Set(input);
    if (setInput.size !== 3) {
      throw new Error(ERROR.invalid_duplication);
    }
  },

  checkOneOrTwo(input) {
    if (!(input === '1' || input === '2')) {
      throw new Error(ERROR.invalid_one_or_two);
    }
  },
};

export default validation;
