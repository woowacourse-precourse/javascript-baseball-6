import { MissionUtils } from "@woowacourse/mission-utils";
import { generateAnswerArray } from "./init";
import { handleInput } from "./input";
import { getHint, checkIsAnswer } from "./hint";

export async function initGame() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  return await generateAnswerArray();
}

export async function playGame(answer) {
  let input = "";
  while (true) {
    input = await handleInput();
    const hint = getHint(answer, input);
    MissionUtils.Console.print(hint);

    if (checkIsAnswer(hint)) break;
  }
}
