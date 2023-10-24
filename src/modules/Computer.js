import { Random } from "@woowacourse/mission-utils";

export default class Computer {
  getComputerNumber() {
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