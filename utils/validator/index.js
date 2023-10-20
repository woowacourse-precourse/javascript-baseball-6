import { checkString, checkZero, checkDuplication, checkThreeDigitNumber } from './unit.js';

const Validators = {
  checkGameNumbers(input) {
    checkString(input);
    checkZero(input);
    checkDuplication(input);
    checkThreeDigitNumber(input);
  },
};

export default Validators;
