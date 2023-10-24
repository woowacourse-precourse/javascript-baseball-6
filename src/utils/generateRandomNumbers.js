import { ANSWER_LENGTH } from "../Constants.js";
import { Random } from "@woowacourse/mission-utils";

const generateRandomNumber = () => {
  const answer = [];

  while (answer.length < ANSWER_LENGTH) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!answer.includes(randomNumber)) {
      answer.push(randomNumber);
    }
  }
  return answer.join("");
};

export default generateRandomNumber;
