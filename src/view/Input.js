import { Console } from "@woowacourse/mission-utils";
import { Validation } from "../utils/Validation";
import { MESSAGE } from "../utils/Constant";

const Input = {
  // 유저 정수 입력 및 오류 확인
  async getUserNumber() {
    try {
      const user = await Console.readLineAsync(MESSAGE.INPUT_NUMBER);
      await Validation.firstValidation(user);
      return user;
    } catch (error) {
      // error
      throw new Error(`[ERROR] ${error}`);
    }
  },

  // 유저 플래그 입력 및 오류 확인
  async checkRestartFlag() {
    try {
      const flag = await Console.readLineAsync(MESSAGE.INPUT_RESTART);
      await Validation.secondValidation(flag);
      return flag;
    } catch (error) {
      // error
      throw new Error(`[ERROR] ${error}`);
    }
  }
};

module.exports = Input;