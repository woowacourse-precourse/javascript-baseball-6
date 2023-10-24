import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        console.log("숫자 야구 게임을 시작합니다.");

        // Create Answer Numbers
        var answerNumber = [];
        while (answerNumber.length < 3) {
            var randomNumber = MissionUtils.Random.pickNumberInRange(1, 9); // 숫자를 반환하는 함수를 호출하세요
            if (!answerNumber.includes(randomNumber)) {
                answerNumber.push(randomNumber);
            }
        }
        console.log(answerNumber);
    }
}

// Run
const app = new App();
app.play();

export default App;
