const CONTROL = require('../controller/ControllerTest');
const VAL = require('../controller/Validate')
const MissionUtils = require('@woowacourse/mission-utils');
const { OUTPUT_MSG } = require('../models/OutputMsg');

// CONSTANTS
const { CONSTANTS , STRIKE_BALL } = require('../models/Constants');


class GamePlay {
    constructor() {
        this.CON = new CONTROL();
        this.VAL = new VAL();
    }

    startGame = () => {
        MissionUtils.Console.print(OUTPUT_MSG.START_GAME);
        this.#getUserNumber();
    }

    // #getAnswer() {
    //     // this.CON.makeAnswer();
    //     this.#inputNumber();
    // }

    // #inputNumber() {
    //     this.CON.getInputNumber();
    // }

    #getUserNumber = async () => {
        this.CON.makeAnswer();
        await this.CON.inputUserNumber();
        // this.VAL.numberValidate(CONSTANTS.USER_NUMBER);
        // throw new Error("[ERROR]")
    }


}

module.exports = GamePlay;
// export default GamePlay;
