import { MissionUtils } from "@woowacourse/mission-utils";

import { getUserNumber } from "./getNumber";
import { GAME_MESSAGE, GAME_STATE } from "../constants";
import { getStrikesAndBallsCount, showMessage } from "./gameHelper";

export async function startPitching(computerNumber) {
  while (true) {
    const userNumber = await getUserNumber();
    MissionUtils.Console.print(`${GAME_MESSAGE.input} ${userNumber}`);
    const strikesAndBalls = getStrikesAndBallsCount(userNumber, computerNumber);
    MissionUtils.Console.print(showMessage(strikesAndBalls));

    if (strikesAndBalls.strikes === 3) {
      return GAME_STATE.strike;
    }
  }
}
