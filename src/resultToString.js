import { RESULT } from "./constatns/constants.js";

// ball, strike 결과를 통해 출력 요구사항에 맞게 출력
function resultToString({ ball, strike }) {
  let output = ''

  if (ball + strike === 0) {
    output = RESULT.NOTHING;
  } else if (ball * strike !== 0) {
    output = `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
  } else if (ball !== 0) {
    output = `${ball}${RESULT.BALL}`;
  } else if (strike !== 0) {
    output = `${strike}${RESULT.STRIKE}`;
  }

  return output;
}

export default resultToString;
