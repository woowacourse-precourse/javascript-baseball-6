import {Console, MissionUtils} from "@woowacourse/mission-utils";

class App {
    async play() {
        // 2. 정답일 때 까지 반복시키기
        let isOut = false

        // 1. 중복되지 않는 랜덤한 숫자 (3자릿수) 만들기
        function randomNumberMaker() {
            const NUMBER_ARRAY = [];
            while (NUMBER_ARRAY.length < 3) {
                const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!NUMBER_ARRAY.includes(NUMBER)) {
                    NUMBER_ARRAY.push(NUMBER);
                }
            }
            return NUMBER_ARRAY
        }

        // 2.1 입력한 숫자의 유효성 검사
        function checkNumber(input) {
            // 2.1.1 숫자가 입력이 되었는가?
            if (isNaN(input)) throw new Error("[ERROR]");
            // 2.1.2 3자리수가 입력이 되었는가?
            if (String(input).length !== 3) throw new Error("[ERROR]");
            // 2.1.3 모두 다른 숫자가 입력이 되었는가?
            const STRING_INPUT = String(input)
            if (STRING_INPUT[0] === STRING_INPUT[1] || STRING_INPUT[1] === STRING_INPUT[2] || STRING_INPUT[2] === STRING_INPUT[0]) throw new Error("[ERROR]");
        }

        // 2.2 입력한 숫자와의 랜던한 값의 일치 검사

        function baseGame(randomNumberArray, inputNumber) {
            const RANDOM_STRING = randomNumberArray.join('')
            const INPUT_STRING = String(inputNumber)
            let strike_count = 0;
            let ball_count = 0;

            // 2.2.1 모든 숫자가 일치하는지 확인하기

            if (RANDOM_STRING === INPUT_STRING) {
                isOut = true;
                return "3스트라이크"
            }

            const INPUT_NUMBER_ARRAY = INPUT_STRING.split('');

            for (let i in INPUT_NUMBER_ARRAY) {
                if (RANDOM_STRING.includes(INPUT_NUMBER_ARRAY[i])) {

                    // 2.2.2 자리와 값이 일치하는 수 골라내기 = strike
                    // 2.2.3 자리는 다르지만 값이 일치하는 수 골라내기 = ball
                    RANDOM_STRING[i] === (INPUT_NUMBER_ARRAY[i]) ? strike_count++ : ball_count++;
                }
            }

            if (!strike_count && !ball_count) return "낫싱";

            if (!strike_count && ball_count) return `${ball_count}볼`;

            if (strike_count && !ball_count) return `${strike_count}스트라이크`;

            return `${ball_count}볼 ${strike_count}스트라이크`
        }

        const RANDOM_NUMBER_ARRAY = randomNumberMaker();

        while (!isOut) {
            const STRING_INPUT = await Console.readLineAsync("숫자를 입력해주세요 : ")
            const NUMBER_INPUT = Number(STRING_INPUT)
            checkNumber(NUMBER_INPUT);
            Console.print(baseGame(RANDOM_NUMBER_ARRAY, STRING_INPUT));
        }

        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")

        if (await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.") === '1') await this.play();
    }
}

export default App;