// 기능1. 라이브러리의 Random을 활용하여 상대방(컴퓨터)의 수 정하기
import { MissionUtils } from "@woowacourse/mission-utils";

export function random(){
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}