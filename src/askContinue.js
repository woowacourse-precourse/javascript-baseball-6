import { Console } from "@woowacourse/mission-utils";
import { ASK_CONTINUE_MESSAGE } from "./constant.js";

async function askContinue() {
  try {
    const response = await Console.readLineAsync(ASK_CONTINUE_MESSAGE);
    if (response === '1') {
      return true
    }

    if (response === '2') {
      return false
    }

    throw new Error('[ERROR] 잘못된 입력입니다.')
    
  } catch (error) {
    throw new Error(error.message)
  }
}

export default askContinue;