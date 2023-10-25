import { NUMBER_LENGTH, ERROR_MESSAGE } from './Constants.js';
class Validation {
  //각자리 숫자들이 서로 다른지 검증
  static checkUniqueDigits(guessNumber) {
    return !(
      guessNumber[0] !== guessNumber[1] &&
      guessNumber[1] !== guessNumber[2] &&
      guessNumber[0] !== guessNumber[2]
    );
  }
  //유저의 입력값 검증
  static verityUserNumber(guessNumber) {
    if (
      guessNumber.length !== NUMBER_LENGTH ||
      !guessNumber ||
      isNaN(guessNumber) ||
      this.checkUniqueDigits(guessNumber) ||
      guessNumber.includes('0')
    ) {
      throw new Error(ERROR_MESSAGE);
    }
  }
  static verifyExitNumber(exitNumber) {
    if(exitNumber!=='1' && exitNumber !== '2'){
      throw new Error(ERROR_MESSAGE);
    }
  }
}
export default Validation;
