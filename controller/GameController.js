import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import createRandomNumber from "../utils/CreateRandomNumber.js";
import NumberComparison from "../utils/NumberComparison.js";

class GameController {
    constructor() {
        this.computer = createRandomNumber();
        this.ballCount = 0;
        this.strikeCount = 0;
    }

    startGame() {
        OutputView.printStartMessage();
        this.inputNumber();
    }

    async inputNumber() {
        const userInput = await InputView.inputUserNumber();
        this.validCheck(userInput.split("").map(Number));
    }

    validCheck(number) {
        this.userInputNumber = number;
        this.countBallStrike();
    }

    countBallStrike() {
        this.userInputNumber.forEach((item, index) => {
            if (item === this.computer[index]) {
                this.strikeCount += 1;
            } else if (this.computer.includes(Number(item))) {
                this.ballCount += 1;
            }
        });
        this.printGameResult();
    }

    printGameResult() {
        OutputView.printResult(this.ballCount, this.strikeCount);
        if (this.strikeCount !== 3){
            this.ballCount = 0;
            this.strikeCount = 0;
            this.inputNumber();
        }
    }

}

export default GameController;
