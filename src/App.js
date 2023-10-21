import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        let replay = true;
        while (replay) {
            const baseBallGame = new BaseBallGame();
        }
    }
}

class BaseBallGame {
    constructor() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        this.answer = [];
        while (this.answer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.answer.includes(number)) {
                this.answer.push(number);
            }
        }
    }
}

export default App;
