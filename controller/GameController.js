import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import createRandomNumber from "../utils/CreateRandomNumber.js";

class GameController {
    startGame() {
        OutputView.printStartMessage();
        createRandomNumber();
        this.inputNumber();
    }

    inputNumber() {
        InputView.inputUserNumber();
    }
}

export default GameController;