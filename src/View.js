import { MissionUtils } from "@woowacourse/mission-utils";
import { validateUserNum } from "./validation";
import { COMMAND, GAME_RESULT } from "./constants";
import { READ, ERROR } from "./message";

export const View = {
  async readUserNum() {
    const userNumber = await MissionUtils.Console.readLineAsync(READ.USER_NUM);
    const numberList = userNumber.split("");

    validateUserNum(numberList);

    return numberList.map(Number);
  },

  async chooseRestart() {
    const userInput = await MissionUtils.Console.readLineAsync(READ.RESTART);

    if (userInput === COMMAND.RESTART) return true;
    if (userInput === COMMAND.END) return false;

    throw new Error(" [ERROR] " + ERROR.INVALID_TYPE);
  },

  printGameHint({ strike, ball }) {
    MissionUtils.Console.print(getGameHint({ strike, ball }));
  },
};

const getGameHint = ({ strike, ball }) => {
  if (strike === 0 && ball === 0) return GAME_RESULT.NOTHING;

  return [ball && GAME_RESULT.BALL(ball), strike && GAME_RESULT.STRIKE(strike)]
    .filter(Boolean)
    .join(" ");
};
