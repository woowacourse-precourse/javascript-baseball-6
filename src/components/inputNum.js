import { MissionUtils } from "@woowacourse/mission-utils";

export async function inputNum() {
  const userNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ');
  return userNum;
}