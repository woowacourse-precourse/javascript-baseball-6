import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 무작위로 정답을 생성하여 string 형태로 반환
 * 
 * @returns {string}
 */
export default function makeAnswer() {
  const answerList = [];

  while (answerList.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answerList.includes(number)) {
      answerList.push(number);
    }
  }
  
  return answerList.join("");
}

// console.log(makeAnswer());