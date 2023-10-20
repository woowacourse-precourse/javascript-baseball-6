import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async getUserNumber (message) {
    try {
      // 예외검증 처리 필요
      const userNumber = await Console.readLineAsync(message);
      return userNumber;
    } catch (error) {
      // 입력값 예외처리 throw 하기
    }
  }
};

export default InputView;