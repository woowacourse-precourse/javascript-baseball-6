import {RANDOM_NUMBER_MAX, RANDOM_NUMBER_MIN, INPUT_LIMIT} from "./constants/index.js"
import { pickNumberInRange } from './utils/index.js'
/**
 * 컴퓨터의 행동이 담긴 클래스 
 * 랜덤으로 중복되지 않는 세개의 숫자를 나열하여 제공함
 * 볼,스트라이크,낫싱을 판별해서 알려줌
 * @class
 */
class Computer{
    randomNumber;
    init(){
        this.randomNumber = this.makeRandomNumber();
    }

     /**
     * 중복되지 않은 숫자배열을 생성해주는 메소드  (number.length=3)
     * @return {number[]}
     */
    makeRandomNumber() {
        const randomNumber = [];
        while (randomNumber.length < INPUT_LIMIT) {
            const pickNumber = pickNumberInRange(RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX);
            if (!randomNumber.includes(pickNumber)) {
                randomNumber.push(pickNumber);
            }
        }
        return randomNumber;
    }

    /**
    * 사용자에게 입력받은 데이터의 스트라이크와 볼의 개수를 판별해냄
    * @param {string} input
    * @return {object} {ball, strike}
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
}

export default Computer;