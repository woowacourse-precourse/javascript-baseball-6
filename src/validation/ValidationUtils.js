import { ERROR_MESSAGE, NUMBER_LENGTH } from '../Constants.js';

class ValidationUtils {
  // 각자리 숫자들이 서로 다른지 검증
  static checkUniqueDigits(inputValue) {
    if (
      inputValue[0] === inputValue[1] ||
      inputValue[1] === inputValue[2] ||
      inputValue[0] === inputValue[2]
    ) {
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE_DIGIT);
    }
  }
  // 값이 없을 때
  static isInputEmpty(inputValue) {
    if (!inputValue) {
      throw new Error(ERROR_MESSAGE.NO_INPUT);
    }
  }
  // 숫자를 입력하지 않았을 때
  static isNumber(inputValue) {
    if (isNaN(inputValue)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
  }
  // 1~9사이의 세자리 숫자인지
  static isThreeNumber(inputValue) {
    if (inputValue.length !== NUMBER_LENGTH || inputValue.includes('0')) {
      throw new Error(ERROR_MESSAGE.NOT_THREE_GUESSNUMBER);
    }
  }
  // 올바른 1혹은 2만 입력해야 하는 입력값인지
  static isNumberOneorTwo(inputValue){
    if (inputValue !== '1' && inputValue !== '2') {
        throw new Error(ERROR_MESSAGE.NOT_NUMBER_ONE_OR_TWO);
      }
  }
}
export default ValidationUtils;
