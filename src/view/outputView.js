import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MSG } from "../constants/messages.js";

const outputView = {
  startMsg() {
    MissionUtils.Console.print(OUTPUT_MSG.STARTING);
  },

  resultMsg(ball, strike) {
    MissionUtils.Console.print(OUTPUT_MSG.COUNT_RESULT[ball][strike]);
  },

  endMsg() {
    MissionUtils.Console.print(OUTPUT_MSG.ENDING);
  },
};

export default outputView;
