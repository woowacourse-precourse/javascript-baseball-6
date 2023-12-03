import { Console } from "@woowacourse/mission-utils";
import { validation } from "./features/validation.js";
import { INPUT_MESSAGE, INTERFACE } from "./constants.js";

const InputView = {
  async readPlayNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.PLAY_NUMBER);

    validation.validatePlayNumber(input);

    return input;
  },

  async readReplayOrExit() {
    const input = await Console.readLineAsync(
      INPUT_MESSAGE.SELECT_REPLAY_OR_EXIT
    );

    validation.validateSelectReplayOrExit(input);

    return input === INTERFACE.REPLAY;
  },
};

export default InputView;
