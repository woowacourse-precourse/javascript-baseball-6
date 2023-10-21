import { MissionUtils } from "@woowacourse/mission-utils";
import {ERRORS} from "../constants/index.js"
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
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
export {Console, Random, throwError}