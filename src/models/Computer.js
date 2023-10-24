import { Random } from "@woowacourse/mission-utils";
import { CONSTANT } from "../constants/constant";

export default class Computer {
  generateNumber() {
    let computer = '';

    while (computer.length < CONSTANT.selectNumber) {
      const randomNumber = Random.pickNumberInRange(CONSTANT.startScope, CONSTANT.endScope);
      if (!computer.includes(String(randomNumber))) {
        computer += String(randomNumber);
      }
    }

    return Number(computer);
  }
}