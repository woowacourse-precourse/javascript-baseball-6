import { MissionUtils } from "@woowacourse/mission-utils";
import { getRandomNum, getRestartNum } from "./NumberSet";

async function startGame() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  await getRandomNum();
}

async function exitGame() {
  const restart = await getRestartNum();
  if (restart === "1") {
    await getRandomNum();
  } else if (restart === "2") {
    MissionUtils.Console.print("게임 종료");
  } else {
    throw new Error("[ERROR] 1 또는 2를 입력해야합니다.");
  }
}

export { exitGame, startGame };

