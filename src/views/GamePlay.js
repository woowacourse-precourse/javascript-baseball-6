const CONTROL = require('../controller/ControllerTest');
const VAL = require('../controller/Validate')
const MissionUtils = require('@woowacourse/mission-utils');
const { OUTPUT_MSG , ERROR_MSG } = require('../models/OutputMsg');

// CONSTANTS
const { CONSTANTS , STRIKE_BALL } = require('../models/Constants');


class GamePlay {
    constructor() {
        this.CON = new CONTROL();
        this.VAL = new VAL();
    }

    startGame = async () => {
        MissionUtils.Console.print(OUTPUT_MSG.START_GAME);
        await this.#getAnswerUserNumber();
    }

    #getAnswerUserNumber = async () => {
        this.CON.makeAnswer();
        await this.CON.inputUserNumber();
    }
}

module.exports = GamePlay;