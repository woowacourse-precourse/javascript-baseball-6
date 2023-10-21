import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/StringMessages.js";
import { NO_BALL, NO_STRIKE } from "../constants/Constants.js";

const OutputView = {
  
  printStaticMessage(message) {
    Console.print(message);
  },
  
  progressMessage(ball, strike) {
    let message = "";

    if (ball === NO_BALL && strike === NO_STRIKE) message = MESSAGES.NATING;
    if (ball === NO_BALL && strike > NO_STRIKE) message = `${strike}${MESSAGES.STRIKE}`;
    if (ball > NO_BALL && strike === NO_STRIKE) message = `${ball}${MESSAGES.BALL}`;
    if (ball > NO_BALL && strike > NO_STRIKE) message = `${ball}${MESSAGES.BALL} ${strike}${MESSAGES.STRIKE}`;

    return this.printStaticMessage(message);
  },
}

export default OutputView;