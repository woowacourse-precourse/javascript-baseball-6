import { INPUT_MAX_LENGTH } from "./static";

/**
 * 입력값의 유효성을 체크하는 함수
 * @param {'1' | '2'} input 
 * @param {boolean} restart 
 * @returns 
 */
export const isValid = (input, restart) => {
    // 게임 중인 경우
    if (restart) {
        // input이 number가 아닌 경우
        if (isNaN(input)) {
            throw new Error("[ERROR] 입력값이 숫자가 아닙니다.");
        }
        // input이 3자리 수가 아닌 경우
        if (input.length !== INPUT_MAX_LENGTH) {
            throw new Error(`[ERROR] 입력값이 ${INPUT_MAX_LENGTH}자리 숫자가 아닙니다.`);
        }
        // input이 전부 다른 수가 아닌 경우
        if ((new Set(input)).size != INPUT_MAX_LENGTH) {
            throw new Error("[ERROR] 입력값은 전부 다른 값이어야 합니다.");
        }
        return;
    }
    // 게임 종료인 경우. input은 종료 여부 입력값이다.
    // '1', '2'가 아닌 경우
    if (!['1', '2'].includes(input)) {
        throw new Error("[ERROR] 올바른 입력이 아닙니다.")
    }
    return;
}