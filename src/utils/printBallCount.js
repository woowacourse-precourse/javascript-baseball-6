import { Console } from "@woowacourse/mission-utils";
import { BALL_COUNT } from "../Constants";

const printBallCount = (scoreCount) => {
  const { strike, ball } = scoreCount;

  if (strike === 0 && ball === 0) {
    Console.print(BALL_COUNT.nothing);
  } else {
    let message = "";
    if (ball !== 0) {
      message += `${ball}${BALL_COUNT.ball}`;
    }
    if (strike !== 0) {
      if (message !== "") {
        message += " ";
      }
      message += `${strike}${BALL_COUNT.strike}`;
    }
    Console.print(message);
  }
};

export default printBallCount;
