const { STRIKE_BALL } = require('../models/Constants'); 
const { OUTPUT_MSG } = require('../models/OutputMsg');
const MissionUtils = require('@woowacourse/mission-utils');


class OutputView {
    printResult() {
        const MSG = ( STRIKE_BALL.STRIKE > 0 && STRIKE_BALL.BALL > 0 ) ? this.#printAll() : this.#nothingCheck();
        return MSG
    }

    #printAll() {
        return `${STRIKE_BALL.BALL+OUTPUT_MSG.BALL} ${STRIKE_BALL.STRIKE+OUTPUT_MSG.STRIKE}`;
    }

    #nothingCheck() {
        return ( STRIKE_BALL.STRIKE === 0 && STRIKE_BALL.BALL === 0 ) ? OUTPUT_MSG.NOTHING : this.#resultCheck();
    }

    #resultCheck() {
        return ( STRIKE_BALL.STRIKE > 0) ? `${STRIKE_BALL.STRIKE+OUTPUT_MSG.STRIKE}` : `${STRIKE_BALL.BALL+OUTPUT_MSG.BALL}`
    }
}

module.exports = OutputView;