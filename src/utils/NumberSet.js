import { MissionUtils } from "@woowacourse/mission-utils";
import { validCheckUserNum } from "./ValidInput";

async function getRandomNum() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join("");
}

async function getUserNum() {
  const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  await validCheckUserNum(userNum);
  return userNum;
}

async function getRestartNum() {
  const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  return restart;
}

export { getRandomNum, getRestartNum, getUserNum };
