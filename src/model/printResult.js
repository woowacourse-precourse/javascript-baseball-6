import { Console } from "@woowacourse/mission-utils";
import { BASEBALL } from "../constants/baseBall";
import { OUTPUT_MESSAGE } from "../constants/message";
import { ZERO } from "../constants/number";

export default function printResult(data) {
  const { ball, strike } = data;

  const format = makeBallFormat(ball) + makeStrikeFormat(strike);

  if (strike === 3) {
    Console.print(`${data.strike}${BASEBALL.STRIKE}\n${OUTPUT_MESSAGE.FINISH}`);
    return true;
  } else {
    format === "" ? Console.print(BASEBALL.NOTHING) : Console.print(format);
    return false;
  }
}

function makeBallFormat(ball) {
  return ball !== ZERO ? `${ball}${BASEBALL.BALL} ` : "";
}

function makeStrikeFormat(strike) {
  return strike !== ZERO ? `${strike}${BASEBALL.STRIKE}` : "";
}
