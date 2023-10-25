import printGameResult from "./message/result/printGameResult.js";
import Pitcher from "./unit/Pitcher.js";
import Batter from "./unit/Batter.js";
import checkRestartStatus from "./message/restaart/checkRestartStatus.js";
import Umpire from "./unit/umpire.js";
import {Console} from "@woowacourse/mission-utils";


class App {
    constructor() {
        this.winCondition = 3;
        this.hasStartToken = true;
        this.restartToken = "1"
    }

    async play(){
        let { restartToken } = this;

        while (restartToken === "1") {
            const umpire = new Umpire();
            const pitcher = new Pitcher();
            const batter = new Batter();
            const { winCondition } = this;
            let { hasStartToken } = this;

            pitcher.setRandomBallCount();
            const pitcherBallNumbers = pitcher.gameCountNumbers;

            while (hasStartToken) {
                await batter.setThreeBatNumbers();
                const batterBallNumbers = batter.ballCountNumbers;

                const { strikeCount, ballCount} = umpire.checkBatterResult(pitcherBallNumbers, batterBallNumbers);

                if(strikeCount === winCondition) {
                    hasStartToken = false;
                }

                printGameResult(winCondition, strikeCount, ballCount);
            }

            restartToken = await checkRestartStatus();
        }
    }
}

export default App;

const app = new App();
app.play();