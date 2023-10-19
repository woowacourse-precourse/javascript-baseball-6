import { Console } from "@woowacourse/mission-utils";

import { START_MESSAGE } from "./constant/message.js";

export default class Print {
  static startMessage() {
    Console.print(START_MESSAGE);
  }
}
