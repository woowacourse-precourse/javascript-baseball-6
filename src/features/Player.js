import { Console } from "@woowacourse/mission-utils";
import { Validation } from "./Validation.js";
import { MESSAGE } from "../constants/messages.js";

export const player = {
  input: async function () {
    try {
      const input = await Console.readLineAsync(MESSAGE.PLAYER.INPUT);
      const validation = new Validation(input);
      validation.validate();

      return input;
    } catch (error) {
      return new Promise((_, reject) => {
        reject(error);
      });
    }
  },
  selectReplayOrExit: async function () {
    const input = await Console.readLineAsync(
      MESSAGE.PLAYER.SELECT_REPLAY_OR_EXIT
    );

    if (input === "1") {
      return true;
    }
    if (input === "2") {
      return false;
    }

    throw new Error(MESSAGE.ERROR.UNDEFINED);
  },
};
