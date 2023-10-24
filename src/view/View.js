import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_INFO, MESSAGE_STATE } from "../constants/Message.js";

// [입출력] 비동기
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

// [입출력] 출력
export function printStart() {
  return Console.print(MESSAGE_INFO.gameStart);
}

export function printEnd() {
  return Console.print(MESSAGE_INFO.gameEnd);
}

export function printResult(result) {
  const message = [];

  if (result.ball > 0) {
    message.push(`${result.ball}${MESSAGE_STATE.ball}`);
  }
  if (result.strike > 0) {
    message.push(`${result.strike}${MESSAGE_STATE.strike}`);
  }
  if (!message.length) {
    message.push(MESSAGE_STATE.nothing);
  }

  Console.print(message.join(" "));
}
