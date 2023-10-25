import { Random } from "@woowacourse/mission-utils";

export default class Computer {
  getComputerNumber() {
    let computerNum = '';

    while (computerNum.length < 3) {
      const randomDigit = Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(String(randomDigit))) {
        computerNum += String(randomDigit);
      }
    }

    return computerNum;
  }
}

