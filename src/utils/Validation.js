import { NUMBER, ERROR, FLAG } from "./Constant.js";

const Validation = {
  /*
  사용자 입력 정수 확인
  1. 정수 확인
  2. 정수 길이 확인
  3. 중복 확인
  */
  async firstValidation(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.INPUT_NUMBER_IN_STRING)
    } else if (number.length !== NUMBER.MAX_LENGTH) {
      throw new Error(ERROR.INPUT_NUMBER_OVER);
    } else if (number[0] === number[1] || number[1] == number[2] || number[2] === number[0]) {
      throw new Error(ERROR.INPUT_NUMBER_DUPLICATION);
    }
  },

  /*
  사용자 입력 플래그 확인
  1. 1 : 새 게임
  2. 2 : 게임 종료
  */
  async secondValidation(flag) {
    if (flag !== FLAG.NEW_GAME && flag !== FLAG.END_GAME) {
      throw new Error(ERROR.INPUT_FLAG);
    }
  }
}

export { Validation }