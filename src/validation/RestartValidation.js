import ERROR from '../constant/ERROR.js';
import { CHOICE } from '../constant/CONSTANT.js';

export default class RestartValidation {
  constructor(input) {
    this.checkOneOrTwo(input);
  }

  checkOneOrTwo(input) {
    if (!(input === CHOICE.restart || input === CHOICE.end)) {
      throw new Error(ERROR.invalid_one_or_two);
    }
  }
}
