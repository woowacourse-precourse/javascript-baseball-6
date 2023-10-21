import { Random } from "@woowacourse/mission-utils";
import { NUMBER_SIZE } from "../constant.js";

class Computer {
  getComputerChoice() {
    let str = "";
    while (str.length < NUMBER_SIZE) {
      const RANDOM_NUMBER = Random.pickNumberInRange(1, 9);
      if (!str.includes(String(RANDOM_NUMBER))) {
        str += String(RANDOM_NUMBER);
      }
    }

    return Number(str);
  }
}

export default Computer;