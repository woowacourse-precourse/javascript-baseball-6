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
            MissionUtils.Console.print(`${INPUT_MSG.INPUT_NUMBER} ${CONSTANTS.USER_NUMBER}`);
            STRIKE_BALL.STRIKE = 0;
            STRIKE_BALL.BALL = 0;
            this.#checkingStrike(CONSTANTS.USER_NUMBER);
            this.OUT.printResult();
            if (STRIKE_BALL.STRIKE === 3) break;
        }
        this.#endGame();
    }

    #checkingStrike(number) {
        CONSTANTS.ANSWER_NUMBER.map((num,idx) => {
            (number[idx] == num) ? STRIKE_BALL.STRIKE += 1 : this.#checkingBall(number[idx])
        })
    }

    #checkingBall(num) {
        (CONSTANTS.ANSWER_NUMBER.includes(parseInt(num))) ? STRIKE_BALL.BALL += 1 : false;
    }

    #endGame() {
        MissionUtils.Console.print(OUTPUT_MSG.END_GAME);
        this.#reGame();
    }

    async #reGame() {
        MissionUtils.Console.print(OUTPUT_MSG.RE_GAME);
        CONSTANTS.REGAME_CONSTANTS = await MissionUtils.Console.readLineAsync(`${INPUT_MSG.INPUT_NUMBER}`);
        (CONSTANTS.REGAME_CONSTANTS == 1) ? this.getInputNumber() : MissionUtils.Console.print(`${OUTPUT_MSG.GAME_OVER}`); 
    }
}

module.exports = Controller;
