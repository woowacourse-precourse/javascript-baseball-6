const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const createComRandomNum = require("../utils/CreateComRandomNum");

class GameController {
    startGame() {
        OutputView.printStartMessage();
        createComRandomNum();
        this.inputUserNumber();
    }

    inputUserNumber() {
        InputView.inputUserNum();
    }
}

module.exports = GameController;