import { messageIsOverlap, messageNotNumber, messageNotOneToNine, messageNotRestartNumber, messageNotThreeDigits } from "./allErrorMessage";

/**
 * @param {number} guess 전달받은 사용자 입력 숫자
 * @throws 조건문에 맞지 않을 때, 에러 메시지 전달
 */
export function isValidGuess(guess) {
    if (guess.length !== 3) { // 숫자의 길이가 3자리가 아닐 경우
        throw new Error(messageNotThreeDigits);
    }
    if (isNaN(Number(guess))) { // 숫자가 아닐 경우
        throw new Error(messageNotNumber);
    }
    if (new Set(guess).size !== guess.length) { // 중복 숫자가 있는 경우
        throw new Error(messageIsOverlap);
    }
    if (guess < 1 && guess > 9) { // 1-9 사이의 숫자가 아닐 경우
        throw new Error(messageNotOneToNine);
    }
}

/**
 * @param {number} replayInput 게임재시작 여부로 전달받은 사용자 입력 숫자
 * @throws 입력받은 숫자가 1 또는 2기 아닐 경우, 에러 메시지 전달
 */
export async function checkForReplay(replayInput) {
    if (replayInput !== '1' && replayInput !== '2') {
        throw new Error(messageNotRestartNumber);
    }
}
