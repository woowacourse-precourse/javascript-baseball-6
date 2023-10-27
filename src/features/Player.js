import { Console } from "@woowacourse/mission-utils";
import { validation } from "./Validation.js";
import { INPUT_MESSAGE, INTERFACE } from "../constants.js";

export const player = {
  async getPlayNumber() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.PLAY_NUMBER);
      validation.validatePlayNumber(input);

      return input;
    } catch (error) {
      return new Promise((_, reject) => {
        reject(error);
      });
    }
  },
  async selectReplayOrExit() {
    const input = await Console.readLineAsync(
      INPUT_MESSAGE.SELECT_REPLAY_OR_EXIT
    );
    validation.validateSelectReplayOrExit(input);

    return input === INTERFACE.REPLAY;
  },
};
