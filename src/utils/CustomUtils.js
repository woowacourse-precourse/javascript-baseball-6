import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "../messages/GameMessages.js";

const getUserNumber = async () => {
  try {
    const USER_NUMBER = await MissionUtils.Console.readLineAsync(
      Messages.GAME_INPUT_NUMBER
    );
    if (!isValidInput(USER_NUMBER)) {
      throw new Error(Messages.INVALID_INPUT_ERROR);
    }
    const USER_NUMBER_ARRAY = USER_NUMBER.split("").map(Number);
    return USER_NUMBER_ARRAY;
  } catch (error) {
    MissionUtils.Console.print(error.message);
  }
};

const isValidInput = (input) => {
  if (!/^\d+$/.test(input)) {
    return false;
  }

  if (input.length !== 3) {
    return false;
  }

  const uniqueNumbers = new Set(input.split(""));
  if (uniqueNumbers.size !== 3) {
    return false;
  }

  return true;
};

export default { getUserNumber };
