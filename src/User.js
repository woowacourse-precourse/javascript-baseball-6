import { Console } from "@woowacourse/mission-utils";

export class User {
  async inputAnswer() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      if (!this.isValidAnswerInput(userInput)) {
        throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      return userInput;
    } catch (error) {
      throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async inputRetry() {
    try {
      const userInput = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : "
      );
      if (!this.isValidRetryInput(userInput)) {
        throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      return userInput;
    } catch (error) {
      throw Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  isValidAnswerInput(userInput) {
    if (isNaN(userInput)) return false;
    if (userInput.length !== 3) return false;
    return true;
  }

  isValidRetryInput(userInput) {
    if (isNaN(userInput)) return false;
    if (userInput !== "1" && userInput !== "2") return false;
    return true;
  }
}
