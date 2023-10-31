import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MSG } from "../Messages";
import { userInputValid } from "../vaildation";

// 1. 컴퓨터의 랜덤 숫자
export function getComputerNum() {
  const computer = [];
  while (computer.length < 3) {
    const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(RANDOM_NUM)) {
      computer.push(RANDOM_NUM);
    }
  }
  return computer;
}

// 2. 유저의 숫자 입력
export async function getUserNum() {
  let user_input = await MissionUtils.Console.readLineAsync(GAME_MSG.INPUT);
  userInputValid(user_input);
  try {
    return user_input;
  } catch (error) {
    throw new Error("[ERROR]");
  }
}
