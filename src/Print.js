import { Console } from "@woowacourse/mission-utils";

import {
  START_MESSAGE,
  MESSAGE_TO_GET_PLAYER_NUM,
  ERROR_MESSAGE_FOR_PLAYER_NUM,
} from "./constant/message.js";
import Validate from "./Validate.js";

export default class Print {
  static startMessage() {
    Console.print(START_MESSAGE);
  }

  static async getPlayerNumber() {
    try {
      const playerNum = await Console.readLineAsync(MESSAGE_TO_GET_PLAYER_NUM);

      if (!Validate.isValidPlayerNumber(playerNum)) {
        throw new Error(ERROR_MESSAGE_FOR_PLAYER_NUM);
      }

      return playerNum.split("").map((str) => parseInt(str));
    } catch (error) {
      Console.print(error);
    }
  }
}
