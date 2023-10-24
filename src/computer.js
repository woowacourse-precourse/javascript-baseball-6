import { Random } from "@woowacourse/mission-utils";
import constant from "./constant";

export function computer_start() {
  const computer = [];
  while (computer.length < constant.NUMBER_LENGTH) {
    const number = Random.pickNumberInRange(constant.RANGE_START, constant.RANGE_END);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}