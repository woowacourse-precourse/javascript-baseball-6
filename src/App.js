import checkRestartStatus from "./message/restart/checkRestartStatus.js";
import printGameResult from "./message/result/printGameResult.js";
import Pitcher from "./unit/Pitcher.js";
import Batter from "./unit/Batter.js";
import Umpire from "./unit/umpire.js";

class App {
    constructor() {
        this.hasStartToken = true;
        this.restartToken = "1";
        this.winCondition = 3;
    }

    async play(){
        let { restartToken } = this;

        while (restartToken === "1") {
            const umpire = new Umpire();
            const pitcher = new Pitcher();
            const batter = new Batter();
            const { winCondition } = this;
            let { hasStartToken } = this;

            pitcher.setRandomGameNumbers();
            const pitcherGameNumbers = pitcher.gameNumbers;

            while (hasStartToken) {
                await batter.enterGameNumbers();
                const batterGameNumbers = batter.gameNumbers;

                const { strikeCount, ballCount} = umpire.checkBatterResult(
                    pitcherGameNumbers,
                    batterGameNumbers,
                );

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