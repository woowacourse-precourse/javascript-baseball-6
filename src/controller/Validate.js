const { ERROR_MSG } = require('../models/OutputMsg');


class Validate {
    numberValidate(number) {
        if (number.trim() === '') throw new Error(ERROR_MSG.NULL_ERROR);
        if (number.length !== 3) throw new Error(ERROR_MSG.NUMBER_LENGTH_ERROR);
        if (isNaN(number)) throw new Error(ERROR_MSG.IS_NUMBER);
        if (number.includes('0')) throw new Error(ERROR_MSG.IS_ZERO);
        if (number[0] === number[1] || number[1] === number[2] || number[0] === number[2] ) throw new Error(ERROR_MSG.NUMBER_DIFFRENT_ERROR);
    }
    reGameValidate(number) {
        if (number.trim() === '') throw new Error(ERROR_MSG.NULL_ERROR);
        if (isNaN(number)) throw new Error(ERROR_MSG.IS_NUMBER);
        if ((parseInt(number) <= 0 || parseInt(number) > 2))  throw new Error(ERROR_MSG.RE_GAME_NUMBER_ERROR);
    }
}

module.exports = Validate;
