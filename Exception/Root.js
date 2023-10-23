import { ERROR } from '../core/Constants';

class Exception {
  static checkAllException(num) {
    if (!(Exception.checkLength(num) && Exception.checkInteger(num))) {
      throw ERROR.INVALID_NUMBER;
    }
  }

  static checkInteger(num) {
    const newNum = Exception.changeStrToNum(num);
    return Number.isInteger(newNum);
  }

  static checkLength(num) {
    return num.length === 3;
  }

  static changeStrToNum(num) {
    return Number(num);
  }
}

export default Exception;
