import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidGuess } from "../error/validation";
import { messageInputNumber } from "../constant/allPrintMessage";

/**
 * @returns 유효성 검사를 통과한 사용자 입력 숫자 3자리 수 반환
 */
async function getUserGuess() {
    let userGuess = await MissionUtils.Console.readLineAsync(messageInputNumber);
    isValidGuess(userGuess)
    return userGuess;
}

export default getUserGuess;