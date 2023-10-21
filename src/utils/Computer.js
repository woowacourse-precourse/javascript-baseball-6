import { Random } from "@woowacourse/mission-utils";
import { NUMBER_SIZE } from "../constant.js";

class Computer {
  getComputerChoice() {
    let str = "";
    while (str.length < NUMBER_SIZE) {
      const num = Random.pickNumberInRange(1, 9);
      if (!str.includes(String(num))) {
        str += String(num);
      }
    }

    return Number(str);
  }
}

export default Computer;