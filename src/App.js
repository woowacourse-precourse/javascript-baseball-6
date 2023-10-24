import { Console, Random } from "@woowacourse/mission-utils";

export default class App {
  constructor() {
    this.isReplaying = true;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.isReplaying) {
      await this.compareNumbers();
    }
  }

  async getUserNumber() {
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

  async getComputerNumber() {
    const machineGeneratedNumber = [];
    while (machineGeneratedNumber.length < 3) {
      const randomDigit = Random.pickNumberInRange(1, 9);
      if (!machineGeneratedNumber.includes(randomDigit)) {
        machineGeneratedNumber.push(randomDigit);
      }
    }
    return machineGeneratedNumber.join("");
  }
}

