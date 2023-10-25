import { CONSTANT } from './Constant.js';

class Validator {
  static checkIsNumber(input) {
    return input.filter((num) => Number.isNaN(num)).length === 0;
  }
  static checkIsThreeNumbers(input) {
    return input.length === CONSTANT.MAX_NUM_LEN;
  }
  static checkHasDuplicate(input) {
    return new Set(input).size === input.length;
  }
  static checkHasZero(input) {
    return input.includes(0);
  }
  static checkIsOneOrTwo(input) {
    return input === CONSTANT.RESTART_GAME || input === CONSTANT.FINISH_GAME;
  }
}

export default Validator;
