class UserNumError {
  constructor(USER_NUM) {
    this.USER_NUM = USER_NUM;
  }
  userNumNotExist() {
    if (this.USER_NUM.length === 0) {
      throw new Error('[ERROR] 값이 존재하지 않습니다.');
    }
    return false;
  }
  userNumNotNumber() {
    if (isNaN(this.USER_NUM)) {
      throw new Error('[ERROR] 값이 숫자가 아닙니다.');
    }
    return false;
  }
  userNumNotThree() {
    if (this.USER_NUM.length !== 3) {
      throw new Error('[ERROR] 값을 세 자리 수로 입력해주세요.')
    }
    return false;
  }
  userNumSameNum() {
    const SET_USER_NUM = new Set(this.USER_NUM);
    if (this.USER_NUM.length !== SET_USER_NUM.size) {
      throw new Error('[ERROR] 값을 중복되지 않게 입력해주세요.')
    }
    return false;
  } 
}

export default UserNumError;