import MESSAGE from '../constants/messages.js';

const inputValidator = {
  validateNumber(input) {
    const inputNumber = String(input).split('').map(Number);
    if (input.length !== 3) throw new Error(MESSAGE.ERROR.LENGTH_ERROR);
    if (inputNumber.includes('0'))
      throw new Error(MESSAGE.ERROR.INCLUDE_ZERO_ERROR);
    if (inputNumber.length !== new Set(inputNumber).size)
      throw new Error(MESSAGE.ERROR.DUPLICATE_ERROR);
    if (input.replace(/[1-9]/g, '').length > 0)
      throw new Error(MESSAGE.ERROR.NUMBER_ERROR);
  },

  validateRestart(input) {
    if (input.length !== 1) throw new Error(MESSAGE.ERROR.RESTART_ERROR);
    if (input.replace(/1|2/g, '').length > 0)
      throw new Error(MESSAGE.ERROR.RESTART_ERROR);
  },
};

export default inputValidator;
