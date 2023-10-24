import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_INFO, MESSAGE_STATE } from "../constants/Message.js";
import { isValidInput, isValidRestart } from "../utils/Validation.js";

// [입출력] 비동기
export async function playerInput() {
  const inputValue = await Console.readLineAsync(MESSAGE_INFO.gameInput);
  isValidInput(inputValue);
  return inputValue;
}

export async function restartInput() {
  const inputValue = await Console.readLineAsync(MESSAGE_INFO.gameRestart);
  isValidRestart(inputValue);
  return inputValue;
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

  if (result.ball) {
    message.push(`${result.ball}${MESSAGE_STATE.ball}`);
  }
  if (result.strike) {
    message.push(`${result.strike}${MESSAGE_STATE.strike}`);
  }
  if (!message.length) {
    message.push(MESSAGE_STATE.nothing);
  }

  Console.print(message.join(" "));
}
