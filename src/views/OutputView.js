import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/Messages";

const OutputView = {
  
  printStaticMessage(message) {
    Console.print(message);
  },
  
  progressMessage(ball, strike) {
    let message = '';

    if (ball === 0 && strike === 0) message = MESSAGES.NATING;
    if (ball === 0 && strike > 0) message = `${strike}${MESSAGES.STRIKE}`;
    if (ball > 0 && strike === 0) message = `${ball}${MESSAGES.BALL}`;
    if (ball > 0 && strike > 0) message = `${ball}${MESSAGES.BALL} ${strike}${MESSAGES.STRIKE}`;

    return this.printStaticMessage(message);
  },
}

export default OutputView;