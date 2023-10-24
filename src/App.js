import {Console} from "@woowacourse/mission-utils"
import baseGame from "./util/basegame.js";
import {checkNumber, randomNumber} from "./util/helper.js";

class App {
    async play() {
        // 1. 중복되지 않는 랜덤한 숫자 (3자릿수) 만들기
        const RANDOM_NUMBER_ARRAY = randomNumber();

        // 2. 랜덤한 숫자와 입력시킨 값이 정답일 때 까지 반복시키기
        while (true) {
            const STRING_INPUT = await Console.readLineAsync("숫자를 입력해주세요 : ")
            const NUMBER_INPUT = Number(STRING_INPUT)

            // 3. 입력한 숫자의 유효성 검사
            await checkNumber(NUMBER_INPUT);

            // 4. 입력한 숫자의 결과 보여주기
            const result_message = baseGame(RANDOM_NUMBER_ARRAY, STRING_INPUT);
            Console.print(result_message);

            // 3개가 전부 일치할경우 빠져나오기 아닐경우 반복
            if (result_message === "3스트라이크") break;
        }

        // 5. 한번더 시도 여부 물어보기 승낙시 한번 더 시도하기
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")

        if (await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.") === '1') await this.play();
    }
}

export default App;