const VALIDATE = require('./Validate');
const MissionUtils = require('@woowacourse/mission-utils');
const { CONSTANTS } = require('../models/Constants');
const { INPUT_MSG } = require('../models/InputMsg');

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
        CONSTANTS.USER_NUMBER = await MissionUtils.Console.readLineAsync(`${INPUT_MSG.INPUT_NUMBER}`);
    }
}

module.exports = Controller;