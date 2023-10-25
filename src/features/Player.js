import { Console } from "@woowacourse/mission-utils";
import { validation } from "./Validation.js";

const INPUT_MESSAGE = {
  PLAY_NUMBER: "숫자를 입력해주세요 : ",
  SELECT_REPLAY_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

export const player = {
  input: async function () {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.PLAY_NUMBER);
      validation.validatePlayerNumber(input);

      return input;
    } catch (error) {
      return new Promise((_, reject) => {
        reject(error);
      });
    }
  },
  selectReplayOrExit: async function () {
    const input = await Console.readLineAsync(
      INPUT_MESSAGE.SELECT_REPLAY_OR_EXIT
    );
    validation.validateSelectReplayOrExit(input);

    if (input === "1") {
      return true;
    }
    if (input === "2") {
      return false;
    }
  },
};
