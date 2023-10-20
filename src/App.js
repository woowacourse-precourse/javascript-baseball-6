import {
    STRING,
    INPUT_LIMIT,
    RANDOM_NUMBER_MAX, RANDOM_NUMBER_MIN,
    ERRORS,
    STRIKE_GAME_CLEAR,
    RESTART_NUMBER,
    END_NUMBER 
} from "./constants/index.js"
import { Console, Random } from './utils/index.js'

class App {
    isplaying;
    randomNumber;

    constructor() {
        this.init();
    }

    init() {
        this.isplaying = true;
        this.randomNumber = this.makeRandomNumber();
    }
    async play() {
        Console.print(STRING.START);

    }

    /**
     * 중복되지 않은 숫자배열을 생성해주는 메소드  (number.length=3)
     * @return {number[]}
     */
    makeRandomNumber() {
        const randomNumber = [];
        while (randomNumber.length <= INPUT_LIMIT) {
            const pickNumber = Random.pickNumberInRange(RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX);
            if (!randomNumber.includes(pickNumber)) {
                randomNumber.push(pickNumber);
            }
        }
        return randomNumber;
    }
    /**
     * 사용자에게 데이터를 입력받는 메소드
     * @returns {number[]}
     */
    async playerInputNumber() {
        const input = await Console.readLineAsync(STRING.INPUT).trim();
        this.validateInput(input);
        return Array.from(input, Number);
    }

    /**
     * 사용자에게 입력받은 데이터가 조건에 부합하는지 검사하는 메소드. (예외가 발생할 시에 프로그램을 종료한다.)
     * @param {string} input 
     * @returns true
     */
    validateInput(input) {

        if (input.length !== 3) {
            throw new Error(`${ERRORS.FRONT} ${ERRORS.LENGTH}`);
        }

        if (!/^[1-9]+$/.test(input)) {
            throw new Error(`${ERRORS.FRONT} ${ERRORS.NUMBER}`);
        }

        const dedupe = new Set(input);
        if (dedupe.length !== 3) {
            throw new Error(`${ERRORS.FRONT} ${ERRORS.DUPLICATION}`);
        }

        return true;

    }

}

export default App;
