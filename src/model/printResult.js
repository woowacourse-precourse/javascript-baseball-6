import { BASEBALL } from "../constants/baseBall";
import { OUTPUT_MESSAGE } from "../constants/message";
import { ZERO } from "../constants/number";
import consoleView from "../util/consoleControll";

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
