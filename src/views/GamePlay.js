const CONTROL = require('../controller/Controller');
const MissionUtils = require('@woowacourse/mission-utils');
const { OUTPUT_MSG } = require('../models/OutputMsg');

// CONSTANTS
const { CONSTANTS } = require('../models/Constants');

class GamePlay {
    constructor() {
        this.CON = new CONTROL();
        this.startGame();
    }

    startGame() {
        MissionUtils.Console.print(OUTPUT_MSG.START_GAME);
        this.CON.makeAnswer();
        this.#inputNumber();
    }

    #inputNumber() {
        this.CON.getInputNumber();
    }
}

module.exports = GamePlay;