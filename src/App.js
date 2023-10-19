import {Console, MissionUtils} from "@woowacourse/mission-utils";

class App {
    async play() {

        // 1. 중복되지 않는 랜덤한 숫자 (3자릿수) 만들기
        function randomNumberMaker() {
            const computer = [];
            while (computer.length < 3) {
                const number = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!computer.includes(number)) {
                    computer.push(number);
                }
            }
            return computer
        }

        // 2. 입력한 숫자의 유효성 검사
        function checkNumber(input) {
            // 2.1 숫자가 입력이 되었는가?
            if (typeof input !== "number") throw new Error();
            // 2.2 3자리수가 입력이 되었는가?
            if (String(input).length !== 3) throw new Error();
            // 모두 다른 숫자가 입력이 되었는가?
            if (input[0] === input[1] || input[1] === input[2] || input[2] === input[0]) throw new Error();
        }

        const RANDOM_NUMBER_ARRAY = randomNumberMaker;

    }
}

export default App;
