import { BALL_COUNT } from "../Constants";

const { Console } = require("@woowacourse/mission-utils");

const printBallCount = (scoreCount) => {
  let resultMessage = "";

  if (scoreCount.strike === 0 && scoreCount.ball === 0) {
    resultMessage = BALL_COUNT.nothing;
  }
  if (scoreCount.strike === 0 && scoreCount.ball !== 0) {
    resultMessage = `${scoreCount.ball}${BALL_COUNT.ball}`;
  }
  if (scoreCount.strike !== 0 && scoreCount.ball === 0) {
    resultMessage = `${scoreCount.strike}${BALL_COUNT.strike}`;
  }
  if (scoreCount.strike !== 0 && scoreCount.ball !== 0) {
    resultMessage = ` ${scoreCount.ball}${BALL_COUNT.ball}${scoreCount.strike}${BALL_COUNT.strike}`;
  }

  Console.print(resultMessage);
  return resultMessage;
};

export default printBallCount;
