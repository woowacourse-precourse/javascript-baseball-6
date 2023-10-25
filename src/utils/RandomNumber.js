import { Random } from "@woowacourse/mission-utils";
import CONDITIONS from "../constants/Conditions.js";

/**
 * 1~9의 숫자로 임의의 서로 다른 세자리 숫자를 생성하는 클래스
 * @return {number}
 */
const RANDOM_NUMBER = () => {
  let numberString = "";
  while (numberString.length < CONDITIONS.NUMBER_LENGTH) {
    const temp = Random.pickNumberInRange(
      CONDITIONS.RANGE.MIN,
      CONDITIONS.RANGE.MAX
    );
    if (!numberString.includes(temp)) {
      numberString += temp;
    }
  }
  return Number(numberString);
};

export default RANDOM_NUMBER;
