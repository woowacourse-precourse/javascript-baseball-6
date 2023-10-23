import { MissionUtils } from "@woowacourse/mission-utils";

const radomNumber = (x) => {
  while (x.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    
    if (!x.includes(number)) {
      x.push(number);
    }
  }
};
export default radomNumber;
