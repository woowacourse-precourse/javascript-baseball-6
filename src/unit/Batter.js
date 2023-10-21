import {Console} from "@woowacourse/mission-utils";

class Batter {
    constructor() {
        this.batNumbers = [];
    }

    async setThreeBatNumbers () {
        try {
            const batterInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
            this.batNumbers = batterInput.split("");
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default Batter