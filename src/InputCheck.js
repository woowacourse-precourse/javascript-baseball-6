import { ERROR_MESSAGE } from './Message';
class InputCheck {
  checkInputNumber(userNumber) {
    if (userNumber.length !== 3) {
      throw new Error(ERROR_MESSAGE.COMMON);
    }
    if (isNaN(userNumber)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  }
  restartInputCheck(input) {
    if (input.length !== 1) {
      throw new Error(ERROR_MESSAGE.COMMON);
    }
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
    if (input !== '1' && input !== '2') {
      throw new Error(ERROR_MESSAGE.COMMON);
    }
  }
}
export default InputCheck;
