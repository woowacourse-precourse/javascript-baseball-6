import { Random } from "@woowacourse/mission-utils";

//1에서 9까지 서로 다른 임의의 수 3개를 선택
const makeAnswer = () => {
  const answer = [];
  while (answer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer.join("");
};
export default makeAnswer;
