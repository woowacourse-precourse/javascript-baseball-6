import {Console} from "@woowacourse/mission-utils";
import Batter from "./unit/Batter.js";
import Pitcher from "./unit/Pitcher.js";


class App {
    constructor() {
        this.batter = new Batter();
        this.pitcher = new Pitcher();
        this.strikeCount = 0;
        this.ballCount = 0;
    }

    async play(){
        const WIN_CONDITION = 3;
        let {strikeCount, ballCount} = this

        this.pitcher.setRandomBallCount();
        const pitcherBallNumbers = this.pitcher.ballCountNumbers;

        while (strikeCount !== WIN_CONDITION) {
            strikeCount = 0;
            ballCount = 0;
            await this.batter.setThreeBatNumbers();
            const batterBallNumbers = this.batter.ballCountNumbers;

            for (let bi = 0; bi < pitcherBallNumbers.length; bi++) {
                pitcherBallNumbers.map((pitcherBall, index) => {
                    if (pitcherBall === batterBallNumbers[bi] && bi === index) {
                        strikeCount++;
                    }

                    if (pitcherBall === batterBallNumbers[bi] && bi !== index) {
                        ballCount++;
                    }
                })
            }

            if (strikeCount === 3) {Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");}
            if (strikeCount && ballCount) {Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)}
            if (strikeCount && !ballCount) {Console.print(`${strikeCount}스트라이크`)}
            if (!strikeCount && ballCount) {Console.print(`${ballCount}볼`)}
            if (!strikeCount && !ballCount) {Console.print("낫싱");}
        }
    }
}

export default App;
