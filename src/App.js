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

        const RANDOM_NUMBER_ARRAY = randomNumberMaker;

    }
}

export default App;
