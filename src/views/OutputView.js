import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/Messages.js";

/**
 * 결과값을 출력하는 함수
 * @param {number} strikeCount
 * @param {number} ballCount
 * @returns {string} result
 */
const OUTPUT_VIEW = (strikeCount, ballCount) => {
  let result = "";
  if (strikeCount === 0 && ballCount === 0) {
    result = MESSAGES.NOTHING;
  } else if (strikeCount === 0) {
    result = `${ballCount}${MESSAGES.BALL}`;
  } else if (ballCount === 0) {
    result = `${strikeCount}${MESSAGES.STRIKE}`;
  } else {
    result = `${ballCount}${MESSAGES.BALL} ${strikeCount}${MESSAGES.STRIKE}`;
  }
  Console.print(result);
};

export default OUTPUT_VIEW;
