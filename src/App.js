import {
    STRING,
    INPUT_LIMIT,
    RANDOM_NUMBER_MAX, RANDOM_NUMBER_MIN,
    ERRORS,
    STRIKE_GAME_CLEAR,
    RESTART_NUMBER,
    END_NUMBER
} from "./constants/index.js"
import { Console, Random, throwError } from './utils/index.js'

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
        // for test
        console.log(this.randomNumber);
        while (this.isplaying) {
            const input = await this.playerInputNumber();
            const { ball, strike } = await this.umpireOfGame(input);
            this.printJudgement(ball, strike)
            if (strike === STRIKE_GAME_CLEAR) {
                await this.gameClear();
            }
        }
    }

    /**
     * 중복되지 않은 숫자배열을 생성해주는 메소드  (number.length=3)
     * @return {number[]}
     */
    makeRandomNumber() {
        const randomNumber = [];
        while (randomNumber.length < INPUT_LIMIT) {
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
        const a = await Console.readLineAsync(STRING.INPUT);
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
    /**
         * 사용자에게 입력받은 데이터의 스트라이크와 볼의 개수를 판별해냄
    */
    async umpireOfGame(input) {
        const result = {
            ball: 0,
            strike: 0
        }
        const randomNumber = this.randomNumber;
        randomNumber.forEach((number, idx) => {
            const inputNumber = input[idx];
            if (number == inputNumber) {
                result.strike++;
            } else if (this.randomNumber.includes(inputNumber)) {
                result.ball++;
            }
        })
        return result;
    }
    /**
     * 데이터 판별 결과를 출력함
     * @param {number} ball
     * @param {number} strike
     * @returns 
     */

    printJudgement(ball, strike) {
        if (ball + strike === 0) {
            Console.print(STRING.NOTHING);
        }
        let str = "";
        if (ball != 0) {
            str += `${ball}${STRING.BALL} `;
        }
        if (strike != 0) {
            str += `${strike}${STRING.STRIKE}`;
        }
        Console.print(str);
    }

    /**
     * 게임 클리어시(3strike) 발생하는 메소드
     */
    async gameClear() {
        Console.print(STRING.CLEAR);

        const a = await Console.readLineAsync(`${STRING.RESTART}\n`);
        const input = a.trim();

        throwError(!/^[1-2]$/.test(input), `${ERRORS.CLEAR_INPUT_NUMBER}`)

        if (input == RESTART_NUMBER) {
            this.init();
        } else if (input == END_NUMBER) {
            this.isplaying = false;
        }
    }



}

export default App;
