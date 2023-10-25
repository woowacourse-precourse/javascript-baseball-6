import ValidationUtils from './ValidationUtils.js';

class Validation {
  // 유저의 입력값 검증
  static verityGuessNumber(guessNumber) {
    ValidationUtils.isInputEmpty(guessNumber);
    ValidationUtils.isNumber(guessNumber);
    ValidationUtils.isThreeNumber(guessNumber);
    ValidationUtils.checkUniqueDigits(guessNumber);
  }
  // 프로그램 재시작 or 종료 선택 유저 입력값 검증
  static verifyExitNumber(exitNumber) {
    ValidationUtils.isInputEmpty(exitNumber);
    ValidationUtils.isNumber(exitNumber);
    ValidationUtils.isNumberOneorTwo(exitNumber);
  }
}
export default Validation;
