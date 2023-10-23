import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constant.js";

async function receiveInput() {
  try {
    const userInput = await Console.readLineAsync(INPUT_MESSAGE);
    return userInput
  } catch (err) {
    throw new Error(err)
  }
};

export default receiveInput;