const { CONSTANTS , STRIKE_BALL } = require('../models/Constants'); 
const MissionUtils = require('@woowacourse/mission-utils');


class OutputView {
    printResult() {
        ( STRIKE_BALL.STRIKE > 0 && STRIKE_BALL.BALL > 0 ) ? this.#printAll() : this.#nothingCheck()
    }

    #printAll() {
        MissionUtils.Console.print(`${STRIKE_BALL.BALL}볼 ${STRIKE_BALL.STRIKE}스트라이크`);
    }

    #nothingCheck() {
        ( STRIKE_BALL.STRIKE === 0 && STRIKE_BALL.BALL === 0 ) ? MissionUtils.Console.print(`낫싱`) : this.#resultCheck()

    }

    #resultCheck() {
        ( STRIKE_BALL.STRIKE > 0) ? MissionUtils.Console.print(`${STRIKE_BALL.STRIKE}스트라이크`) : MissionUtils.Console.print(`${STRIKE_BALL.BALL}볼`)
    }
}

module.exports = OutputView;