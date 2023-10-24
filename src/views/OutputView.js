const { STRIKE_BALL } = require('../models/Constants'); 
const { OUTPUT_MSG } = require('../models/OutputMsg');
const MissionUtils = require('@woowacourse/mission-utils');


class OutputView {
    printResult = () => {
        if (STRIKE_BALL.STRIKE === 0 && STRIKE_BALL.BALL === 0) return MissionUtils.Console.print(OUTPUT_MSG.NOTHING);
        if (STRIKE_BALL.BALL === 0) return MissionUtils.Console.print(`${STRIKE_BALL.STRIKE+OUTPUT_MSG.STRIKE}`);
        if (STRIKE_BALL.STRIKE === 0) return MissionUtils.Console.print(`${STRIKE_BALL.BALL+OUTPUT_MSG.BALL}`);
        return MissionUtils.Console.print(`${STRIKE_BALL.BALL+OUTPUT_MSG.BALL} ${STRIKE_BALL.STRIKE+OUTPUT_MSG.STRIKE}`);
    }
}

module.exports = OutputView;