import ERROR from '../constant/ERROR.js';
import { SETTING } from '../constant/CONSTANT';

export default class MainValidation {
  constructor(input) {
    this.checkCorrectMainNumber(input);
    this.checkCorrectMainNumberRange(input);
    this.checkCorrectMainNumbersize(input);
    this.checkDuplicationMainNumber(input);
  }

  checkCorrectMainNumber(input) {
    input.forEach(number => {
      if (Number.isNaN(number)) {
        throw new Error(ERROR.invalid_type);
      }
    });
  }

  checkCorrectMainNumbersize(input) {
    if (input.length !== SETTING.numLen) {
      throw new Error(ERROR.invalid_size);
    }
  }

  checkCorrectMainNumberRange(input) {
    input.forEach(number => {
      if (number < SETTING.startNum || number > SETTING.endNum) {
        throw new Error(ERROR.invalid_range);
      }
    });
  }

  checkDuplicationMainNumber(input) {
    const setInput = new Set(input);
    if (setInput.size !== SETTING.numLen) {
      throw new Error(ERROR.invalid_duplication);
    }
  }
}
