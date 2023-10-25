import { BASEBALL } from "../constants/baseBall.js";
import { OUTPUT_MESSAGE } from "../constants/message.js";
import { ZERO } from "../constants/number.js";
import consoleControl from "../util/consoleControl.js";

export default function printResult(data) {
  const { ball, strike } = data;

  const format = makeBallFormat(ball) + makeStrikeFormat(strike);

  if (strike === 3) {
    consoleControl.printCount(`${strike}${BASEBALL.STRIKE}`);
    consoleControl.printEnd(`${OUTPUT_MESSAGE.FINISH}`);
    return true;
  } else {
    format === ""
      ? consoleControl.printNothing()
      : consoleControl.printCount(format);
    return false;
  }
}

function makeBallFormat(ball) {
  return ball !== ZERO ? `${ball}${BASEBALL.BALL} ` : "";
}

function makeStrikeFormat(strike) {
  return strike !== ZERO ? `${strike}${BASEBALL.STRIKE}` : "";
}
