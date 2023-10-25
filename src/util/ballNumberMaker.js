import { MissionUtils } from "@woowacourse/mission-utils";
import { NUMBER } from "../constants/number.js";

export default function ballNumberMaker() {
  const computer = [];
  while (computer.length < NUMBER.BASEBALL_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(
      NUMBER.MIN,
      NUMBER.MAX
    );
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}
