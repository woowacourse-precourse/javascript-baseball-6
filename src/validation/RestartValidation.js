import ERROR from '../constant/ERROR.js';

export default class RestartValidation {
  constructor(input) {
    this.checkOneOrTwo(input);
  }

  checkOneOrTwo(input) {
    if (!(input === '1' || input === '2')) {
      throw new Error(ERROR.invalid_one_or_two);
    }
  }
}
