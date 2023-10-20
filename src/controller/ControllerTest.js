const VALIDATE = require('./Validate');
const MissionUtils = require('@woowacourse/mission-utils');
const { CONSTANTS } = require('../models/Constants');
const { INPUT_MSG } = require('../models/InputMsg');
const { OUTPUT_MSG , ERROR_MSG } = require('../models/OutputMsg');

class Controller {
    constructor () {
        this.VAL = new VALIDATE();
    }
    makeAnswer = () => {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        CONSTANTS.ANSWER_NUMBER = computer;
    }

    inputUserNumber = async () => {
        try {
            CONSTANTS.USER_NUMBER = await MissionUtils.Console.readLineAsync(INPUT_MSG.INPUT_NUMBER);
            this.VAL.numberValidate(CONSTANTS.USER_NUMBER);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Controller;