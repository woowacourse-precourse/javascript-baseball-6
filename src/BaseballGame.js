import { Random, Console } from "@woowacourse/mission-utils";
import { Message } from "./constants/Message.js";

export default class BaseballGame {
  start() {
    Console.print(Message.INIT);
  }
  play() {
    this.start();
  }
}
