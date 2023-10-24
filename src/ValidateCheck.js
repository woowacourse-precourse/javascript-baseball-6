import { ERROR } from './constants.js';

class ValidateCheck {
  checkUserNumber(userNumber) {
    const IS_UNIQUE = (new Set(userNumber)).size;
    const RE = new RegExp(/[1-9]{3}/g);

    if (!RE.test(userNumber) || userNumber.length !== 3 || IS_UNIQUE !== 3) {
      throw new Error (ERROR.invalidInput);
    };

    return userNumber.split('').map(Number);;
  };

  checkRetry(retryNumber) {
    if (retryNumber !== "1" && retryNumber !== "2") {
      throw new Error (ERROR.retryInput);
    };
  };
};

export default ValidateCheck;
