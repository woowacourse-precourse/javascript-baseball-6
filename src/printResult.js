import { MissionUtils } from "@woowacourse/mission-utils";

export default function printResult(BALL, STRIKE) {
  //정답
  if (STRIKE === 3) {
    MissionUtils.Console.print("3스트라이크");
    return true;
  }

  //오답
  if (STRIKE === 0 && BALL === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (STRIKE === 0 || !BALL) {
    MissionUtils.Console.print(BALL + "볼");
  } else if (BALL === 0 || !STRIKE) {
    MissionUtils.Console.print(STRIKE + "스트라이크");
  } else {
    MissionUtils.Console.print(BALL + "볼 " + STRIKE + "스트라이크");
  }
  return false;
}
