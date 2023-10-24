import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidGuess } from "../error/validation";
import { messageInputNumber } from "../constant/allPrintMessage";

async function getUserGuess() {
    let userGuess = await MissionUtils.Console.readLineAsync(messageInputNumber);
    isValidGuess(userGuess)
    return userGuess;
}

export default getUserGuess;