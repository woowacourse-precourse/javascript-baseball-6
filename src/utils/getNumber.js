import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants";
import { validator } from "./validator";

export function getComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

export async function getUserNumber() {
  try {
    const userNumber = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGE.input
    );
    validator(userNumber);

    return userNumber;
  } catch (error) {
    throw error;
  }
}
