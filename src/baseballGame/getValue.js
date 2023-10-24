import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MSG } from "../Messages";
import { userInputValid } from "../vaildation";

// 1. 컴퓨터의 랜덤 숫자
export function getComputerNum() {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const random = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(random)) {
      COMPUTER.push(random);
    }
  }
  return COMPUTER;
}

// 2. 유저의 숫자 입력
export async function getUserNum() {
  let USER_INPUT = await MissionUtils.Console.readLineAsync(GAME_MSG.INPUT);
  userInputValid(USER_INPUT);
  try {
    return USER_INPUT;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}
