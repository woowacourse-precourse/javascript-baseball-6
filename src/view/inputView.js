import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "../constants/messages.js";

const inputView = {
  async getNumber() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MSG.GET_INPUT);
    return input;
  },

  async endOrReplay() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MSG.END_SIGN);
    return input;
  },
};

export default inputView;
