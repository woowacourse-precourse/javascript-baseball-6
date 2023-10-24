import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../utils/message.js";
import { isValidGameOption } from "../utils/validation.js";
import generateRandomNumber from "./generateRandomNumber.js";
import gameStart from "./gameLogic.js";

const gameLoop = async () => {
  try {
    while (true) {
      const computerNumber = await generateRandomNumber();
      await gameStart(computerNumber);
      const input = await askStartOrQuit();
      if (input === "2") {
        exitGame();
        break;
      }
    }
  } catch (error) {
    throw new Error("[ERROR]");
  }
};

const askStartOrQuit = async () => {
  try {
    MissionUtils.Console.print(
      GAME_MESSAGES.GAME_END + " " + GAME_MESSAGES.GAME_QUIT
    );
    const input = await MissionUtils.Console.readLineAsync(
      GAME_MESSAGES.START_OR_QUIT
    );
    if (!isValidGameOption(input)) {
      throw new Error(ERROR_MESSAGES.IS_GAME_COMMAND_VALID);
    }
    return input;
  } catch (error) {
    throw new Error("[ERROR]");
  }
};

const exitGame = () => {
  MissionUtils.Console.print("게임 종료");
  return;
};

export default gameLoop;
