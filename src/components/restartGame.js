import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME } from "../pages/texts.js";

/* 다시 시작하는 기능 */
export default async function restartGame() {
  while (true) {
    const userInput = await MissionUtils.Console.readLineAsync(GAME.RESTART);
    if (userInput === "1") return true;
    else if (userInput === "2") return false;
  }
}
