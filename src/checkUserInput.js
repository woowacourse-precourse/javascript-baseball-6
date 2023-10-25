import { MissionUtils } from "@woowacourse/mission-utils";

export default function checkUserInput(USER_INPUT) {
  //숫자인지?
  if (isNaN(Number(USER_INPUT))) {
    //숫자가 아닐 경우 true
    throw new Error("[ERROR] 숫자가 아닙니다.");
  }
  if (USER_INPUT.length != 3) {
    throw new Error("[ERROR] 3자리가 아닙니다.");
  }
  if (
    USER_INPUT[0] === USER_INPUT[1] ||
    USER_INPUT[1] === USER_INPUT[2] ||
    USER_INPUT[1] === USER_INPUT[2]
  ) {
    throw new Error("[ERROR] 서로 다른 숫자가 아닙니다.");
  }
  if (USER_INPUT.includes("0")) {
    throw new Error("[ERROR] 0이 포함되어 있습니다.");
  }
}
