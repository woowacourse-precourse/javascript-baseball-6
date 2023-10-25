import Baseball from "./Baseball.js";
import MESSEAGE from "./Constants.js";
import Exception from "./Exception.js";
import { Console } from "@woowacourse/mission-utils"

class Qna {
  static async numberAsking(computer) {
    try {
      const user = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      if(!Exception.isNonException(user)) throw(MESSEAGE.ERROR);

      const baseball = new Baseball(user, computer);
      const result = baseball.outcome();
      Console.print(result);

      return result;
    } catch(error) {
      throw new Error(error)
    }
  }

  static async choiceAsking() {
    try {
      Console.print(MESSEAGE.CELEBRATE_END);
      Console.print(MESSEAGE.RESTART_EXIT);
            
      const answer = await Console.readLineAsync("");
      if(Exception.isExceptionChoice(answer)) throw(MESSEAGE.ERROR);

      return answer;
    } catch(error) {
      throw new Error(error);
    }
  }
}

export default Qna