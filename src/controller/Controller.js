const VALIDATE = require('./Validate');
const MissionUtils = require('@woowacourse/mission-utils');
const { CONSTANTS , STRIKE_BALL } = require('../models/Constants');
const { INPUT_MSG } = require('../models/InputMsg');
const { OUTPUT_MSG } = require('../models/OutputMsg');

class Controller {
    constructor () {
        this.VAL = new VALIDATE();
    }
    makeAnswer = () => {
        const COMPUTER = [];
        while (COMPUTER.length < 3) {
            const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!COMPUTER.includes(NUMBER)) {
                COMPUTER.push(NUMBER);
            }
        }
        CONSTANTS.ANSWER_NUMBER = COMPUTER;
    }

    inputUserNumber = async () => {
        try {
            CONSTANTS.USER_NUMBER = await MissionUtils.Console.readLineAsync(INPUT_MSG.INPUT_NUMBER);
            this.VAL.numberValidate(CONSTANTS.USER_NUMBER);
            MissionUtils.Console.print(`${INPUT_MSG.INPUT_NUMBER} ${CONSTANTS.USER_NUMBER}`);
        } catch (error) {
            throw error;
        }
    }

    checkingStrike = (number) => {
        CONSTANTS.ANSWER_NUMBER.map((num,idx) => {
            (number[idx] == num) ? STRIKE_BALL.STRIKE += 1 : this.#checkingBall(number[idx])
        })
    }

    #checkingBall = (num) => {
        (CONSTANTS.ANSWER_NUMBER.includes(parseInt(num))) ? STRIKE_BALL.BALL += 1 : false;
    }

    endGame = async() => {
        MissionUtils.Console.print(OUTPUT_MSG.END_GAME);
        await this.#reGame();
    }

    #reGame = async() => {
        try {
            MissionUtils.Console.print(OUTPUT_MSG.RE_GAME);
            CONSTANTS.REGAME_CONSTANTS = await MissionUtils.Console.readLineAsync(OUTPUT_MSG.RE_GAME);
            MissionUtils.Console.print(CONSTANTS.REGAME_CONSTANTS);
            this.VAL.reGameValidate(CONSTANTS.REGAME_CONSTANTS);
        } catch (error) {
            throw error
        }
    }
}

module.exports = Controller;