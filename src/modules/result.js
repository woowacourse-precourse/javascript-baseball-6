/* eslint-disable no-plusplus */
import { Console } from "@woowacourse/mission-utils";
import { STATE } from "../common/state"

function printResult(strike, ball) {
  let str = "";
  if (strike === 0 && ball === 0) str += "낫싱";
  if (ball > 0) str += `${ball}볼 `;
  if (strike > 0) str += `${strike}스트라이크`;
  Console.print(str);
}

function getStrikeBallCount(answer, number) {
  let strike = 0;
  let ball = 0;
  number.forEach((num, idx) => {
    if (num === answer[idx]) strike++;
    else if (answer.includes(num)) ball++;
  });
  return [strike, ball];
};

export default function getResult(answer, number) {
  const [strike, ball] = getStrikeBallCount(answer, number);
  printResult(strike, ball);

  if (strike === 3)
    return STATE.GAME_SUCCESS;
  return STATE.GAME_FAIL;
}
