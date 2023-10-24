import { Console } from "@woowacourse/mission-utils";

export default class User {
  async getNumber() {
    Console.print("숫자를 입력해주세요 : ");
    const playerInput = await Console.readLineAsync("");

    if (playerInput.length !== 3) {
      throw new Error("[ERROR] 숫자는 3자리여야 합니다.");
    } else if (playerInput.includes("0")) {
      throw new Error("[ERROR] 숫자에 0이 포함되어 있습니다.");
    } else if (playerInput.split("").some((num) => isNaN(num))) {
      throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
    } else if (
      playerInput.split("").some((num, index, arr) => arr.indexOf(num) !== index)
    ) {
      throw new Error("[ERROR] 숫자가 중복되어 있습니다.");
    } else if (playerInput.includes(" ")) {
      throw new Error("[ERROR] 숫자에 공백이 포함되어 있습니다.");
    }
    return playerInput;
  }
}