import * as MissionUtils from "@woowacourse/mission-utils";

/* 랜덤으로 상대방(컴퓨터)의 수를 설정하는 기능 */
export default function CreateRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}
