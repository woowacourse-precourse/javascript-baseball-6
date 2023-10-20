import { Console } from "@woowacourse/mission-utils";
import * as messages from "./constants/messages";

async function handleExitInput() {
  try {
    const exitInput = await Console.readLineAsync(messages.GAME_RESTART_PROMPT);
    // TODO: 상수로 빼기
    switch (Number(exitInput)) {
      case 1:
        return 1;
      case 2:
        return -1;
      default:
        throw new Error(messages.INVALID_INPUT_ERROR);
    }
  } catch (error) {
    throw error;
  }
}

export default handleExitInput;
