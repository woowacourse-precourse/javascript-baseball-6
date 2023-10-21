import { Console } from "@woowacourse/mission-utils";

export class User {
  async inputAnswer() {
    try {
      const userAnswer = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!this.isValidInput(userAnswer)) {
        throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } catch (error) {
      throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  isValidInput(userAnswer) {
    if (isNaN(userAnswer)) return false;
    if (userAnswer.length !== 3) return false;
    return true;
  }
}
