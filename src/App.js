import {Console} from "@woowacourse/mission-utils";
import printGameResult from "./message/result/printGameResult.js";


class App {
    constructor(pitcher, batter, winCondition, hasStartToken) {
        this.batter = batter;
        this.pitcher = pitcher;
        this.winCondition = winCondition;
        this.hasStartToken = hasStartToken;
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
        const {pitcher, batter, winCondition ,checkBatterResult } = this;
        let { hasStartToken } = this;

        pitcher.setRandomBallCount();
        const pitcherBallNumbers = pitcher.ballCountNumbers;
        Console.print(pitcherBallNumbers)

        while (hasStartToken) {
            await batter.setThreeBatNumbers();
            const batterBallNumbers = batter.ballCountNumbers;

            const { strikeCount, ballCount} = checkBatterResult(pitcherBallNumbers, batterBallNumbers,);

            if(strikeCount === winCondition) {
                hasStartToken = false;
            }

            printGameResult(winCondition, strikeCount, ballCount);
        }
    }
}

export default App;
