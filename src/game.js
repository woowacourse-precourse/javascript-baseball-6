import { MissionUtils } from "@woowacourse/mission-utils";
import { generateAnswerArray } from "./init";
import { handleInput } from "./input";
import { getHint } from "./hint";
import { RESTART_FLAG, QUIT_FLAG } from "./constant";

export async function initGame() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  return await generateAnswerArray();
}

export async function playGame(answer) {
  while (true) {
    const input = await handleInput();
    const hint = getHint(answer, input);
    MissionUtils.Console.print(hint);

    if (answer === input) break;
  }
}

export async function completeGame() {
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  return await MissionUtils.Console.readLineAsync(
    `게임을 새로 시작하려면 ${RESTART_FLAG}, 종료하려면 ${QUIT_FLAG}를 입력하세요.`
  );
}
