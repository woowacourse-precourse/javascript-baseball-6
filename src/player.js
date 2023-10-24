import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_REQUIRE_MESSAGE } from "./constants/messages.js";

const playerInput = async () => {
  try {
    return await MissionUtils.Console.readLineAsync(INPUT_REQUIRE_MESSAGE);
  } catch (error) {
    throw new Error(WRONG_INPUT_MESSAGE);
  }
};

export { playerInput };
