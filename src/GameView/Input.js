import { Console } from "@woowacourse/mission-utils";

class Input {
  async getPlayerGuess() {
    const inputNumbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
    return inputNumbers;
  }

  async askRegame() {
    const choice = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. "
    );
    if (choice === "2") {
      Console.print("게임을 종료합니다.");
      return true;
    }
    if (choice === "1") {
      return false;
    }
    throw new Error("[ERROR]");
  }
}
export default Input;
