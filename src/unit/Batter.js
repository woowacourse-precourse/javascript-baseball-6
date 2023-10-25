import inputValidation from "../validify/inputValidation.js";
import {Console} from "@woowacourse/mission-utils";

class Batter {
    constructor() {
        this.gameNumbers = [];
    }

    async enterGameNumbers () {
        try {
            const batterInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
            this.gameNumbers = batterInput.split("").map(Number);
            inputValidation(this.gameNumbers);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Batter;