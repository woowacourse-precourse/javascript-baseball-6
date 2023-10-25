import printResult from "./printResult.js";

export default function compareAnswer(CORRECT_ANSWER, USER_INPUT) {
  let STRIKE = 0;
  let BALL = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (CORRECT_ANSWER[i] == USER_INPUT[j]) {
        if (i == j) {
          //자리도 같으면 -> 스트라이크
          STRIKE++;
        } else {
          BALL++;
        }
      }
    }
  }

  const RESULT = printResult(BALL, STRIKE);
  return RESULT;
}
