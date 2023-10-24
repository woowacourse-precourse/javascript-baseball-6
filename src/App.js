import {Console} from "@woowacourse/mission-utils";
import printGameResult from "./message/result/printGameResult.js";


class App {
    constructor(startToken, pitcher, batter, winCondition) {
        this.startToken = startToken
        this.batter = batter;
        this.pitcher = pitcher;
        this.winCondition = winCondition
    }

    checkBatterResult (pitcherBallNumbers, batterBallNumbers) {
        let strikeCount = 0;
        let ballCount = 0;

        for (let i = 0; i < pitcherBallNumbers.length; i++) {
            pitcherBallNumbers.map((pitcherBall, index) => {
                if (pitcherBall === batterBallNumbers[i] && i === index) {
                    strikeCount++;
                }

                if (pitcherBall === batterBallNumbers[i] && i !== index) {
                    ballCount++;
                }
            });
        }

        return {
            strikeCount,
            ballCount,
        }
    }

    async play(){
        const { winCondition, pitcher, batter, checkBatterResult } = this;

        pitcher.setRandomBallCount();
        const pitcherBallNumbers = pitcher.ballCountNumbers;
        Console.print(pitcherBallNumbers)

        while (this.strikeCount !== winCondition) {
            this.strikeCount = 0;
            this.ballCount = 0;
            await batter.setThreeBatNumbers();
            const batterBallNumbers = batter.ballCountNumbers;

            const { strikeCount, ballCount} = checkBatterResult(pitcherBallNumbers, batterBallNumbers);

            printGameResult(strikeCount, ballCount, winCondition);
        }
    }
}

export default App;
