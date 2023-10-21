import { MissionUtils } from "@woowacourse/mission-utils";
import {ERRORS} from "../constants/index.js"


/**
 * 문자열을 출력한다.
 * @param {string} message 
 */
function print(message) {
    MissionUtils.Console.print(message);
}

/**
 * 사용자에게 message 문자열을 보여준 후 데이터를 입력받는다.
 * @param {string} message 
 * @returns {string} 사용자에게 입력받은 데이터
 */
async function readLineAsync(message) {
    const input = await MissionUtils.Console.readLineAsync(message);
    return input;
}

/**
 * 랜덤한 숫자를 생성한다.
 * @param {number} min 
 * @param {number} max 
 * @returns {number} 랜덤한 숫자
 */
function pickNumberInRange(min, max){
    return MissionUtils.Random.pickNumberInRange(min,max)
}

/**
 * 반복되는 에러 처리 과정 모듈화
 * @param {boolean} condition
 * @param {string} errorMessage
 */
const throwError= (condition, errorMessage) => {
    if(condition){
        throw new Error(`${ERRORS.FRONT} ${errorMessage}`)
    }
} 
export {print, readLineAsync, pickNumberInRange, throwError}