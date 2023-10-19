import { Console } from "@woowacourse/mission-utils";

import {
  START_MESSAGE,
  MESSAGE_TO_GET_PLAYER_NUM,
  ERROR_MESSAGE_FOR_PLAYER_NUM,
  SHOW_BALL_COUNT,
  SHOW_STRIKE_COUNT,
  SHOW_BALL_STRIKE_COUNT,
  NOTHING_MESSAGE,
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

  static showHint(ball, strike) {
    if (ball !== 0 && strike === 0) {
      Console.print(SHOW_BALL_COUNT(ball));
      return;
    }

    if (ball === 0 && strike !== 0) {
      Console.print(SHOW_STRIKE_COUNT(strike));
      return;
    }

    if (ball !== 0 && strike !== 0) {
      Console.print(SHOW_BALL_STRIKE_COUNT(ball, strike));
      return;
    }

    Console.print(NOTHING_MESSAGE);
  }
}
