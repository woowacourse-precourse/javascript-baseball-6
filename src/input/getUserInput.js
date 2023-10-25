import { MissionUtils } from "@woowacourse/mission-utils";

export default async function getUserInput() {
  const input = await MissionUtils.Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );

  return input;
}
