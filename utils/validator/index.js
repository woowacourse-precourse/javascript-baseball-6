import {
  checkString,
  checkZero,
  checkDuplication,
  checkThreeDigitNumber,
  checkOnlyOneOrTwo,
} from './unit.js';

const Validators = {
  checkGameNumbers(input) {
    checkString(input);
    checkZero(input);
    checkDuplication(input);
    checkThreeDigitNumber(input);
  },

  checkGameCommand(input) {
    checkOnlyOneOrTwo(input);
  },
};

export default Validators;
