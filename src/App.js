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

        // 3. 입력한 숫자와의 랜던한 값의 일치 검사

        function baseGame(randomNumberArray, inputNumber) {
            const RANDOM_STRING = randomNumberArray.join('')
            const INPUT_STRING = String(inputNumber)
            let strike_count = 0;
            let ball_count = 0;

            // 3.1 모든 숫자가 일치하는지 확인하기

            if (RANDOM_STRING === INPUT_STRING) return "3개의 숫자를 모두 맞히셨습니다! 게임 종료"

            const INPUT_NUMBER_ARRAY = INPUT_STRING.split('');

            for (let i in INPUT_NUMBER_ARRAY) {
                if (INPUT_NUMBER_ARRAY[i].includes(RANDOM_STRING)) {

                    // 3.2 자리와 값이 일치하는 수 골라내기 = strike
                    // 3.3 자리는 다르지만 값이 일치하는 수 골라내기 = ball

                    RANDOM_STRING[i] === INPUT_NUMBER_ARRAY[i] ? strike_count++ : ball_count++;
                }
            }

            if (!strike_count && !ball_count) return "낫싱";

            if (!strike_count && ball_count) return `${ball_count}볼`;

            if (strike_count && !ball_count) return `${strike_count}스트라이크`;

            return `${ball_count}볼 ${strike_count}스트라이크`
        }

        const RANDOM_NUMBER_ARRAY = randomNumberMaker;

    }
}

export default App;
