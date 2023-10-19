import { Random, Console } from "@woowacourse/mission-utils";
class App {
    async play() {
        console.log("숫자 야구 게임을 시작합니다.");
        let answer = [];
        while (answer.length < 3) {
            let number = Random.pickNumberInRange(1, 9);
            if (!answer.includes(number)) {
                answer.push(number);
            }
        }
        console.log("숫자를 입력해주세요.");
    }
}

export default App;
