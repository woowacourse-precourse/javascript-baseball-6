import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 정답을 생성하여 리스트 형태로 반환
 * 
 * @todo answerList 반환형태 string / list 중 선택
 * @returns {*}
 */
export default function makeAnswer() {
  const answerList = [];

  while (answerList.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answerList.includes(number)) {
      answerList.push(number);
    }
  }
  
  return answerList;
}

// console.log(makeAnswer());