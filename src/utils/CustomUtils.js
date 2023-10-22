import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "../messages/GameMessages.js";

const getUserNumber = async () => {
  try {
    const USER_NUMBER = await MissionUtils.Console.readLineAsync(
      Messages.GAME_INPUT_NUMBER
    );
    return USER_NUMBER;
  } catch (error) {}
};

export default { getUserNumber };
