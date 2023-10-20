import { Random } from "@woowacourse/mission-utils";
import { NUMBER_SIZE } from "../constant.js";

class Computer {
  // 랜덤으로 출력된 3자리 수 도출
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