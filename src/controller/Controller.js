const MissionUtils = require('@woowacourse/mission-utils');
const { CONSTANTS } = require('../models/Constants'); 
const { INPUT_MSG } = require('../models/InputMsg');

class CONTROL {
    makeAnswer() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        CONSTANTS.ANSWER_NUMBER = computer;
    }

    async getInputNumber() {
        CONSTANTS.USER_NUMBER = await MissionUtils.Console.readLineAsync('')
        console.log(CONSTANTS.USER_NUMBER);
    }
}

module.exports = CONTROL;
