import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MSG, ERROR_MSG } from "./Messages";

// 0. 게임 시작 메세지 출력
const gameStart = async () => {
  MissionUtils.Console.print(GAME_MSG.START);
  const COMPUTER_NUM = getComputerNum();
  const USER_NUM = getUserNum();
};

// 1. 컴퓨터의 랜덤 숫자
const getComputerNum = () => {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(number)) {
      COMPUTER.push(number);
    }
  }
  return COMPUTER.join("");
};

// 2. 유저의 숫자 입력
const getUserNum = async () => {
  try {
    const USER_NUM = await MissionUtils.Console.readLineAsync(GAME_MSG.INPUT);
    if (USER_NUM.length !== 3) {
      throw new Error(ERROR_MSG.INPUT_ERROR_LEN);
    }
    return USER_NUM;
  } catch (error) {
    throw new Error("[ERROR]");
  }
};

export { gameStart };
