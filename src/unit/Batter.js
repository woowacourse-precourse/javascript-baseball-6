import {Console} from "@woowacourse/mission-utils";
import inputValidation from "../validify/inputValidation.js";

class Batter {
    constructor() {
        this.ballCountNumbers = [];
    }

    async setThreeBatNumbers () {
        try {
            const batterInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
            this.ballCountNumbers = batterInput.split("").map(Number);
            inputValidation(this.ballCountNumbers);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Batter;