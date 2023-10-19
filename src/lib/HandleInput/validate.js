const { VALIDATION_RULE, ERROR_MESSAGE } = require("../Constants");

function validateGuessInput(input) {
    if (parseInt(input).toString() !== input) throw new Error(ERROR_MESSAGE.NOT_AN_INT);
    if (input.length !== VALIDATION_RULE.VALID_GUESS_LENGTH) throw new Error(ERROR_MESSAGE.INVALID_GUESS_LENGTH);
    for (const char of input) {
        const number = parseInt(char);
        if (number < VALIDATION_RULE.GUESS_MIN_VALUE_INCLUSIVE) throw new Error(ERROR_MESSAGE.INVALID_GUESS_VALUE);
        if (VALIDATION_RULE.GUESS_MAX_VALUE_INCLUSIVE < number) throw new Error(ERROR_MESSAGE.INVALID_GUESS_VALUE)
    };
    return true;
};

module.exports = {validateGuessInput};