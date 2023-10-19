import { Console } from "@woowacourse/mission-utils";

export default function successCheck(computerNumber, userNumber) {
  let ball = 0;
  let strike = 0;
  for (let i = 0; i < computerNumber.length; i++) {
    const index = computerNumber.indexOf(userNumber[i]);
    if (index === i) strike++;
    else if (index > -1) ball++;
  }
  scorePrint(ball, strike);
  return strike === 3;
}

function scorePrint(ball, strike) {
  let score = "";
  if (ball === 0 && strike === 0) score = "낫싱";
  if (ball > 0) score += ball + "볼 ";
  if (strike > 0) score += strike + "스트라이크";
  Console.print(score);
}
