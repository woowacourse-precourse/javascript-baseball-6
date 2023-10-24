import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_INFO } from "../constants/Message.js";

export async function playerInput() {
  try {
    return Console.readLineAsync(MESSAGE_INFO.gameInput);
  } catch (error) {
    return Console.print(error);
  }
}

export async function restartInput() {
  try {
    return Console.readLineAsync(MESSAGE_INFO.gameRestart);
  } catch (error) {
    return Console.print(error);
  }
}

export async function exitInput() {
  return Console.close();
}
