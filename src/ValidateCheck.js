import { ERROR } from './utils/constants.js';

class ValidateCheck {
  inputCheck(numbers) {
    const IS_UNIQUE = (new Set(numbers)).size;

    if (!numbers.match(/[1-9]{3}/) || IS_UNIQUE !== 3) {
      throw new Error (ERROR.invalidInput);
    };

    return numbers.split('').map(Number);
  };

  countCheck(computerNumber, userNumber) {
    const STRIKE = [...computerNumber].filter((x, idx) => userNumber[idx] === x).length;
    const BALL = [...computerNumber].filter(x => userNumber.includes(x)).length - STRIKE;

    return [STRIKE, BALL];
  };

  retryCheck(retry) {
    if (retry !== "1" && retry !== "2") {
      throw new Error (ERROR.retryInput);
    };

    return retry;
  };

}

export default ValidateCheck;
