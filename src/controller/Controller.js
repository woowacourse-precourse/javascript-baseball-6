const MissionUtils = require('@woowacourse/mission-utils');
const { CONSTANTS } = require('../models/Constants'); 

class CONTROL {
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
}

module.exports = CONTROL;
