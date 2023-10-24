import { MissionUtils } from "@woowacourse/mission-utils";
import { Messages } from "./Messages";

// 0. 게임 시작 메세지 출력
const gameStart = async () => {
  MissionUtils.Console.print(Messages.START);
  const COMPUTER_NUMBER = getComputerNum();
  MissionUtils.Console.print(COMPUTER_NUMBER);
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

export { gameStart };
