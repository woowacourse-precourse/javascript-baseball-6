const OUT_VIEW = require('../views/OutputView');
const MissionUtils = require('@woowacourse/mission-utils');
const { CONSTANTS , STRIKE_BALL } = require('../models/Constants'); 
const { INPUT_MSG } = require('../models/InputMsg');
const { OUTPUT_MSG } = require('../models/OutputMsg');

class Controller {
    constructor() {
        this.OUT = new OUT_VIEW();
    }
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
        while (true){
            CONSTANTS.USER_NUMBER = await MissionUtils.Console.readLineAsync(`${INPUT_MSG.INPUT_NUMBER}`);
            console.log(CONSTANTS);
            MissionUtils.Console.print(`${INPUT_MSG.INPUT_NUMBER} ${CONSTANTS.USER_NUMBER}`);
            STRIKE_BALL.STRIKE = 0;
            STRIKE_BALL.BALL = 0;
            this.#checkingStrike(CONSTANTS.USER_NUMBER);
            if (STRIKE_BALL.STRIKE === 3) return;
        }
    }

    #checkingStrike(number) {
        CONSTANTS.ANSWER_NUMBER.map((num,idx) => {
            (number[idx] == num) ? STRIKE_BALL.STRIKE += 1 : this.#checkingBall(number[idx])
        })
    }

    #checkingBall(num) {
        (CONSTANTS.ANSWER_NUMBER.includes(parseInt(num))) ? STRIKE_BALL.BALL += 1 : false;
    }
}

module.exports = Controller;
