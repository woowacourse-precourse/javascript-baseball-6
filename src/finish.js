import { Console } from "@woowacourse/mission-utils";
import constant from "./constant";

export async function finish() {
  Console.print(constant.RESTART_MESSAGE)
  const input = await Console.readLineAsync("")
  if (input === "1") return true
  else if (input === "2") return false
  else {
    throw Error(constant.RESTART_ERROR_MESSAGE);
  }
}