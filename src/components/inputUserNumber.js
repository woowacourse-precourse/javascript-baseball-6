import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../pages/texts.js";

/* 사용자로부터 값을 입력받는 기능 */
export default async function inputUserNumber() {
  const userInput = await MissionUtils.Console.readLineAsync(GAME.INPUT);
  if (isNaN(userInput)) throw new Error(ERROR.NUMBER);
  else if (userInput.includes(0)) throw new Error(ERROR.INCLUDE_0);

  if (userInput.length !== 3) throw new Error(ERROR.LENGTH);

  if (new Set(userInput).size !== userInput.length)
    throw new Error(ERROR.REPEATED);

  return [...userInput].map(Number);
}
