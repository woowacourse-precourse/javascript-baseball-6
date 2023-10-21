import { MissionUtils } from "@woowacourse/mission-utils";

export function randomNumber() {
  const computerArr = [];
  while (computerArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerArr.includes(number)) {
      computerArr.push(number);
    }
  }
  const computer =  computerArr.join('');
  return computer;
}