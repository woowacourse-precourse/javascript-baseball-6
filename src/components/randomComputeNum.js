import { MissionUtils } from "@woowacourse/mission-utils";

export default function randomComputeNum(){
  const computerNum = [];
  
  while (computerNum.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNum.includes(number)) {
      computerNum.push(number);
    }
  }
  return computerNum;
}

