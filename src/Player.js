import {
    STRING,
    INPUT_LIMIT,
    RANDOM_NUMBER_MAX, RANDOM_NUMBER_MIN,
    ERRORS,
    STRIKE_GAME_CLEAR,
    RESTART_NUMBER,
    END_NUMBER
} from "./constants/index.js"
import { print, readLineAsync, pickNumberInRange, throwError } from './utils/index.js'

/**
 * 사용자의 행동이 담긴 클래스
 * 사용자가 데이터를 입력하는 기능을 제공함
 * 
 * @class
 */
class Player {
    /**
     * 사용자에게 데이터를 입력받는 메소드
     * @returns {number[]}
     */
    async playerInputNumber() {
        const a = await readLineAsync(STRING.INPUT);
        // 입력받은 데이터의 양쪽 공백을 제거해준다.
        const input = a.trim();
        this.validateInput(input);
        return Array.from(input, Number);
    }

    /**
     * 사용자에게 입력받은 데이터가 조건에 부합하는지 검사하는 메소드. (예외가 발생할 시에 프로그램을 종료한다.)
     * @param {string} input 
     * @returns true
     */
    validateInput(input) {

        throwError(input.length !== 3, `${ERRORS.LENGTH}`);
        throwError(!/^[1-9]+$/.test(input), `${ERRORS.NUMBER}`);

        const dedupe = new Set(input);
        throwError(dedupe.size !== 3, `${ERRORS.DUPLICATION}`);

        return true;
    }
}

export default Player;
