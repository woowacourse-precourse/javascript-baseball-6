import { MissionUtils } from "@woowacourse/mission-utils";

import { GAME_MESSAGE, GAME_STATE } from "../constants";

export async function newGame() {
  try {
    const newGameInput = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.newGame
    );

    const numberInput = Number(newGameInput);

    if (numberInput === 1) {
      return GAME_STATE.init;
    } else if (numberInput === 2) {
      return GAME_STATE.end;
    } else {
      throw new Error(GAME_MESSAGE.invalidInput);
    }
  } catch (error) {
    throw error;
  }
}
