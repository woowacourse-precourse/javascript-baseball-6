import { MissionUtils } from "@woowacourse/mission-utils";
import { validCheckUserNum } from "./ValidInput";
import { checkResult } from "./NumberCount";

async function getRandomNum() {
  const computer = [];
  let computerNum = "";
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  computerNum = computer.join("");
  await getUserNum(computerNum);
}

async function getUserNum(computerNum) {
  const userNum = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
  await validCheckUserNum(userNum);
  await checkResult(computerNum, userNum);
}

async function getRestartNum() {
  const restart = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  return restart;
}

export { getRandomNum, getUserNum, getRestartNum };
