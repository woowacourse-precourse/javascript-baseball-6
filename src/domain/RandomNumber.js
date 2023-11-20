import { MissionUtils } from "@woowacourse/mission-utils";
import NUMBERS from "../static/Numbers.js";

class RandomNumber{
    #randomNum;

    #randomNumber() {
        const computer = [];
        while (computer.length < NUMBERS.three) {
            let number = MissionUtils.Random.pickNumberInRange(NUMBERS.numberRangeMin, NUMBERS.numberRangeMax);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }
    getRandomNumber() {
        this.#randomNum = this.#randomNumber();
        return this.#randomNum;
    }
}
export default RandomNumber;