const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const createRandomNumber = require("../utils/CreateRandomNumber");

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

module.exports = GameController;