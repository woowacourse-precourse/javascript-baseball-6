import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GUIDE_TEXT, NUMBER_SIZE } from "../constant/constant";

class User {
  // 사용자의 숫자 입력
  async getUserChoice() {
    const myNum = await Console.readLineAsync(GUIDE_TEXT.USER_INPUT);

    if (!this.checkValidation(myNum))
      throw new Error(ERROR_MESSAGE.INVALID_ANSWER);
    return myNum;
  }

  // 입력된 숫자가 유효한지 검사
  checkValidation(input) {
    const str = String(input);
    const pattern = /^[1-9]{3}$/;

    if (str.length === NUMBER_SIZE && pattern.test(str)) {
      return true;
    }
    return false;
  }
}

export default User;