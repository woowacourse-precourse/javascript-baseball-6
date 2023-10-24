const { Console } = require("@woowacourse/mission-utils");
const { COMMAND_HASH, ERROR_MESSAGE, INPUT_MESSAGE, VALIDATION_RULE } = require("./Constants");

const handleGuessInput = async function () {
    let response;
    try {
        response = await Console.readLineAsync(INPUT_MESSAGE.GUESS, (answer) => answer);
        validateGuessInput(response);
    } catch(e) {
        throw e;
    };
    return response;
};

const handleCommandInput = async function () {
    let response;
    try {
        response = await Console.readLineAsync(INPUT_MESSAGE.COMMAND, (answer) => answer);
        validateCommandInput(response);
        response = COMMAND_HASH[response];
    } catch(e) {
        throw e;
    };
    return response;
};

const validateGuessInput = function (input) {
    const visited = new Set();
    if (parseInt(input) !== Number(input)) throw new Error(ERROR_MESSAGE.NOT_AN_INT);
    if (input.length !== VALIDATION_RULE.VALID_GUESS_LENGTH) throw new Error(ERROR_MESSAGE.INVALID_GUESS_LENGTH);
    for (const char of input) {
        const number = parseInt(char);
        if (visited.has(char)) throw new Error(ERROR_MESSAGE.UNIQUE_CONSTRAINT_VIOLATED);
        if (number < VALIDATION_RULE.GUESS_MIN_VALUE_INCLUSIVE) throw new Error(ERROR_MESSAGE.INVALID_GUESS_VALUE);
        if (VALIDATION_RULE.GUESS_MAX_VALUE_INCLUSIVE < number) throw new Error(ERROR_MESSAGE.INVALID_GUESS_VALUE);
        visited.add(char);
    };
    return true;
};

const validateCommandInput = function (input) {
    if (parseInt(input) !== Number(input)) throw new Error(ERROR_MESSAGE.NOT_AN_INT);
    if (!VALIDATION_RULE.VALID_COMMAND.includes(input)) throw new Error(ERROR_MESSAGE.INVALID_COMMAND);
    return true;
}

module.exports = { handleCommandInput, handleGuessInput };