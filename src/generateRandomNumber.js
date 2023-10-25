import { MissionUtils } from "@woowacourse/mission-utils";

//랜덤 넘버 생성
export default function generateRandomNumber() {
  let array = [];
  while (array.length < 3) {
    let random_number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!array.includes(random_number)) {
      array.push(random_number);
    }
  }
  return array.join("");
}
