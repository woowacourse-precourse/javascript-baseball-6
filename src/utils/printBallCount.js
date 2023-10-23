import { Console } from "@woowacourse/mission-utils";
import { BALL_COUNT } from "../Constants";

const printBallCount = (scoreCount) => {
  const { strike, ball } = scoreCount;
  let message = "";

  if (strike === 0 && ball === 0) {
    message = BALL_COUNT.nothing;
  } else {
    if (ball !== 0) {
      message += `${ball}${BALL_COUNT.ball}`;
    }
    if (strike !== 0) {
      if (message !== "") {
        message += " ";
      }
      message += `${strike}${BALL_COUNT.strike}`;
    }
  }
  Console.print(message);
  return message;
};

export default printBallCount;
