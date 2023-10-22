const MissionUtils = require("@woowacourse/mission-utils");
const createComRandomNum = require("../utils/CreateComRandomNum");

class GameController {
    startGame() {
        createComRandomNum();
    }
}

module.exports = GameController;