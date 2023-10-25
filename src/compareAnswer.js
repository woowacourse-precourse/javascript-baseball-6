import printResult from "./printResult.js";

export default function compareAnswer(CORRECT_ANSWER, USER_INPUT) {
  //용어 선언
  let STRIKE = 0;
  let BALL = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //같은 수가 존재하지 않으면 -> 낫싱
      //같은 수 발견하면
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
