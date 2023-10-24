import {Console} from "@woowacourse/mission-utils";
import printGameResult from "./message/result/printGameResult.js";
import checkBatterResult from "./evaluation/checkBatterResult.js";
import checkRestartStatus from "./message/restaart/checkRestartStatus.js";

class App {
    constructor(pitcher, batter, winCondition) {
        this.batter = batter;
        this.pitcher = pitcher;
        this.winCondition = winCondition
        this.strikeCount = 0;
        this.ballCount = 0;
    }

    async play(){
        const { winCondition, pitcher, batter } = this;

        pitcher.setRandomBallCount();
        const pitcherBallNumbers = pitcher.ballCountNumbers;
        Console.print(pitcherBallNumbers)

        while (this.strikeCount !== winCondition) {
            this.strikeCount = 0;
            this.ballCount = 0;
            await batter.setThreeBatNumbers();
            const batterBallNumbers = batter.ballCountNumbers;

            const [ strikeCountResult, ballCountResult ] = checkBatterResult(pitcherBallNumbers, batterBallNumbers, this.strikeCount, this.ballCount);
            this.strikeCount = strikeCountResult;
            this.ballCount = ballCountResult;

            printGameResult(this.strikeCount, this.ballCount, winCondition);
        }

        return await checkRestartStatus();
    }
}

export default App;
