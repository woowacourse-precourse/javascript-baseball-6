import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP, ERROR, BALL, STRIKE, NOTHING } from "./constant.js";

export function printResult(strikeCount, ballCount) {
  const printBall = ballCount + BALL;
  const printStrike = strikeCount + STRIKE;

  if (!strikeCount && !ballCount) {
    Console.print(NOTHING);
  }

  if (strikeCount && ballCount) {
    Console.print(`${printBall} ${printStrike}`);
  }

  if (strikeCount && !ballCount) {
    Console.print(printStrike);
  }

  if (!strikeCount && ballCount) {
    Console.print(printBall);
  }

  if (strikeCount === 3) {
    Console.print(GAME_HELP.CORRECT_NUMBER);
    return strikeCount;
  }
}
