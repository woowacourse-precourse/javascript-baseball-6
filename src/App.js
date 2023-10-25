import {Console} from "@woowacourse/mission-utils";
import printGameResult from "./message/result/printGameResult.js";
import Pitcher from "./unit/Pitcher.js";
import Batter from "./unit/Batter.js";
import checkRestartStatus from "./message/restaart/checkRestartStatus.js";


class App {
    constructor() {
        this.winCondition = 3;
        this.hasStartToken = true;
        this.restartToken = "1"
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

        while (this.restartToken === "1") {
            const batter = new Batter();
            const pitcher = new Pitcher();
            const { winCondition ,checkBatterResult } = this;
            let { hasStartToken } = this;

            pitcher.setRandomBallCount();
            const pitcherBallNumbers = pitcher.gameCountNumbers;

            while (hasStartToken) {
                await batter.setThreeBatNumbers();
                const batterBallNumbers = batter.ballCountNumbers;

                const { strikeCount, ballCount} = checkBatterResult(pitcherBallNumbers, batterBallNumbers,);

                if(strikeCount === winCondition) {
                    hasStartToken = false;
                }

                printGameResult(winCondition, strikeCount, ballCount);
            }

            this.restartToken = await checkRestartStatus();
        }
    }
}

export default App;
