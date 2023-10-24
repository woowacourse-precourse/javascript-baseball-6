class InputCheck {
  checkInputNumber(userNumber) {
    if (userNumber.length !== 3) {
      throw new Error('[ERROR] 입력하신 길이가 잘못되었습니다.');
    }
    if (isNaN(userNumber)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요');
    }
  }
}
export default InputCheck;
