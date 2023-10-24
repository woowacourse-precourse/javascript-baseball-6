import { MissionUtils } from "@woowacourse/mission-utils";

export default function printResult(data) {
  // 볼과 스트라이크가 같이 있을 때
  if (data.ball !== 0 || data.strike !== 0) {
    if (data.strike === 3) {
      MissionUtils.Console.print(
        `${data.strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
      return true;
    } else if (data.ball === 0) {
      MissionUtils.Console.print(`${data.strike}스트라이크`);
    } else if (data.strike === 0) {
      MissionUtils.Console.print(`${data.ball}볼`);
    } else {
      MissionUtils.Console.print(`${data.ball}볼 ${data.strike}스트라이크`);
    }
  } else {
    MissionUtils.Console.print(`낫싱`);
    return false;
  }
  return false;
}
