const { CONSTANTS , STRIKE_BALL } = require('../models/Constants');
const { OUTPUT_MSG , ERROR_MSG } = require('../models/OutputMsg');


class Validate {
    numberValidate = (number) => {
        if (number.length !== 3) throw new Error(ERROR_MSG.NUMBER_LENGTH_ERROR);
    }
    reGameValidate = (number) => {
        if (isNaN(number)) throw new Error(ERROR_MSG.IS_NUMBER);
    }
}

module.exports = Validate;
