import { MissionUtils } from "@woowacourse/mission-utils";

export default async function restartOrQuit() {
  let restart = await MissionUtils.Console.readLineAsync(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  );
  return parseInt(restart);
}
