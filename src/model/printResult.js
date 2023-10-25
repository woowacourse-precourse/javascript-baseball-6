import { BASEBALL } from "../constants/baseBall.js";
import { OUTPUT_MESSAGE } from "../constants/message.js";
import { ZERO } from "../constants/number.js";
import consoleView from "../util/consoleControll.js";

export default function printResult(data) {
  const { ball, strike } = data;

  const format = makeBallFormat(ball) + makeStrikeFormat(strike);

  if (strike === 3) {
    consoleView.printResult(`${data.strike}${BASEBALL.STRIKE}`);
    consoleView.printEnd(`${OUTPUT_MESSAGE.FINISH}`);

    return true;
  } else {
    format === ""
      ? consoleView.printNothing()
      : consoleView.printResult(format);
    return false;
  }
}

function makeBallFormat(ball) {
  return ball !== ZERO ? `${ball}${BASEBALL.BALL} ` : "";
}

function makeStrikeFormat(strike) {
  return strike !== ZERO ? `${strike}${BASEBALL.STRIKE}` : "";
}
