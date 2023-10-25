import ValidationUtils from './ValidationUtils.js';

class Validation {
  //유저의 입력값 검증
  static verityGuessNumber(guessNumber) {
    ValidationUtils.isInputEmpty(guessNumber);
    ValidationUtils.isNumber(guessNumber);
    ValidationUtils.isThreeNumber(guessNumber);
    ValidationUtils.checkUniqueDigits(guessNumber);
  }
  static verifyExitNumber(exitNumber) {
    ValidationUtils.isInputEmpty(exitNumber);
    ValidationUtils.isNumber(exitNumber);
    ValidationUtils.isNumberOneorTwo(exitNumber);
  }
}
export default Validation;
