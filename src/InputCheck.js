class InputCheck {
  checkInputNumber(userNumber) {
    if (userNumber.length !== 3) {
      throw new Error('[ERROR] 입력하신 길이가 잘못되었습니다.');
    }
    if (isNaN(userNumber)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요');
    }
  }
  restartInputCheck(input) {
    if (input.length !== 1) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.1');
    }
    if (isNaN(input)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.2');
    }
    if (input !== '1' && input !== '2') {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.3');
    }
  }
}
export default InputCheck;
