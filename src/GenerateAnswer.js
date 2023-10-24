import { MissionUtils } from "@woowacourse/mission-utils";

// 정답 생성 함수
export function generateComputeNum(){
  const computerNum = [];
  while (computerNum.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9).toString();
    if (!computerNum.includes(number)) {
      computerNum.push(number);
    }
  }
  return computerNum;
}