import { MissionUtils } from "@woowacourse/mission-utils";

const testNum = MissionUtils.Random.pickNumberInRange(1, 9);

function randomNum(arr) {
  let num = null;
  num = MissionUtils.Random.pickNumberInRange(1, 9);
  console.log("첫번째 num", num);
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i}번째 for구문 arr[i] = ${arr[i]} num = ${num}`);
    if (arr[i] === num) {
      console.log("램덤 숫자와 기존숫자가 동일합니다");
      console.log("새로운 램덤 숫자를 생성합니다.");
      num = MissionUtils.Random.pickNumberInRange(1, 9);
      console.log(`새로운 램덤 숫자 = ${num}`);
    }
  }
  console.log("________________________");
  console.log(`최종 출력 결과 = ${num}`);
  return num;
}

randomNum([1, 3]);
console.log(testNum);

// 램덤 수를 하나 뽑아옴
// 램덤 수가 arr에 포함되어있는 숫자와 겹치면 새로 뽑음
