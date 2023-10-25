import { MissionUtils } from "@woowacourse/mission-utils";
import Constants from "../utils/Constants.js";

export function compareNumber(target, guess) {
  let ball = 0;
  let strike = 0;
  // 개수 세기
  for (let i = 0; i < Constants.RANDOM_DIGIT; i++) {
    if (target[i] === guess[i]) {
      strike++;
    } else if (target.includes(guess[i])) {
      ball++;
    }
  }
  // 출력
  let resultString = "";
  if (ball) resultString += `${ball}볼 `;
  if (strike) resultString += `${strike}스트라이크`;
  if (!ball && !strike) resultString += "낫싱";
  MissionUtils.Console.print(resultString);
  // 반환값
  if (strike === Constants.RANDOM_DIGIT) return true;
  else return false;
}
